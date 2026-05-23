import { useEffect, useState } from "react"

import DashboardHeader from "../components/dashboard/DashboardHeader"
import ReservaForm from "../components/forms/ReservaForm"
import ReservasTable from "../components/dashboard/ReservasTable"

import {
  obtenerReservas,
  crearReserva,
  eliminarReserva,
  actualizarReserva
} from "../api/reservaApi"

import Swal from "sweetalert2"

function Dashboard() {

  const [reservas, setReservas] = useState([])

  const [editando, setEditando] = useState(null)

  const [loading, setLoading] = useState(true)

  // 🔥 cargar reservas
  useEffect(() => {

    cargarReservas()

  }, [])

  const cargarReservas = async () => {

    try {

      setLoading(true)

      const data = await obtenerReservas()

      setReservas(data)

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)

    }

  }

  // 🔥 crear reserva
  const handleCrearReserva = async (data) => {

    try {

      const response = await crearReserva(data)

      // 🔥 refrescar lista completa
      await cargarReservas()

      Swal.fire({
        icon: "success",
        title: "Reserva creada",
        text: response.message || "Reserva registrada correctamente"
      })

    } catch (error) {

      console.error(error)

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo crear la reserva"
      })

    }

  }

  // 🔥 eliminar reserva
  const handleEliminar = async (id) => {

    const confirmacion = await Swal.fire({
      title: "¿Eliminar reserva?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar"
    })

    if (!confirmacion.isConfirmed) return

    try {

      await eliminarReserva(id)

      // 🔥 refresca desde backend
      await cargarReservas()

      Swal.fire({
        icon: "success",
        title: "Reserva eliminada"
      })

    } catch (error) {

      console.error(error)

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar la reserva"
      })

    }

  }

  // 🔥 editar reserva
  const handleEditar = (reserva) => {

    setEditando(reserva)

  }

  // 🔥 actualizar reserva
  const handleActualizar = async (data) => {

    try {

      const reservaActualizada = {
        ...editando,
        ...data
      }

      await actualizarReserva(reservaActualizada)

      // 🔥 refrescar desde backend
      await cargarReservas()

      setEditando(null)

      Swal.fire({
        icon: "success",
        title: "Reserva actualizada"
      })

    } catch (error) {

      console.error(error)

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo actualizar la reserva"
      })

    }

  }

  // 🔥 loading screen
  if (loading) {

    return (

      <section className="loading-screen">

        <h2>
          Cargando dashboard...
        </h2>

      </section>

    )

  }

  return (

    <section className="dashboard">

      <DashboardHeader
        totalReservas={reservas.length}
      />

      <ReservaForm
        onSubmit={
          editando
            ? handleActualizar
            : handleCrearReserva
        }
        editando={editando}
      />

      <ReservasTable
        reservas={reservas}
        onDelete={handleEliminar}
        onEdit={handleEditar}
      />

    </section>

  )

}

export default Dashboard