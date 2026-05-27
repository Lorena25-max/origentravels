import { useEffect, useState } from "react"

import { useSearchParams } from "react-router-dom"

import { obtenerPaquetes } from "../../api/paqueteApi"

const initialState = {
  idepaquete: "",
  fechaviaje: "",
  cantidadpersonas: 1
}

function ReservaForm({ onSubmit, editando }) {

  const [formData, setFormData] =
    useState(initialState)

  const [paquetes, setPaquetes] =
    useState([])

  const [searchParams] =
    useSearchParams()

  // 🔥 cargar paquetes reales backend
  useEffect(() => {

    cargarPaquetes()

  }, [])

  const cargarPaquetes = async () => {

    const data =
      await obtenerPaquetes()

    setPaquetes(data)

  }

  // 🔥 autocompletar paquete URL
  useEffect(() => {

    const paqueteURL =
      searchParams.get("paquete")

    if (editando) {

      setFormData(editando)

      return

    }

    if (paqueteURL) {

      setFormData((prev) => ({
        ...prev,
        idepaquete: paqueteURL
      }))

      return

    }

    setFormData(initialState)

  }, [editando, searchParams])

  const handleChange = (e) => {

    const { name, value } =
      e.target

    if (name === "cantidadpersonas") {

      const numero = Number(value)

      if (numero > 4) return

    }

    setFormData({
      ...formData,
      [name]: value
    })

  }

  // 🔥 paquete seleccionado REAL
  const paqueteSeleccionado =
    paquetes.find(

      (p) =>
        p.idpaquete ===
        formData.idepaquete

    )

  const handleSubmit = (e) => {

    e.preventDefault()

    const usuario =
      JSON.parse(
        localStorage.getItem("user")
      )

    const total =
      paqueteSeleccionado.precio *
      Number(formData.cantidadpersonas)

    const reservaCompleta = {

      idreserva:
        editando?.idreserva ||
        `R${Math.floor(
          100 + Math.random() * 900
        )}`,

      idecliente:
        usuario.idecliente,

      idepaquete:
        formData.idepaquete,

      fechareserva:
        new Date()
          .toISOString()
          .split("T")[0],

      fechaviaje:
        formData.fechaviaje,

      totalpagado:
        total,

      cantidadpersonas:
        Number(
          formData.cantidadpersonas
        ),

      estado:
        "PENDIENTE PAGO"
    }

    onSubmit(reservaCompleta)

    setFormData(initialState)

  }

  return (

    <div className="reserva-form-container">

      <div className="reserva-card">

        <h2>
          {
            editando
              ? "Editar Reserva"
              : "Nueva Reserva"
          }
        </h2>

        <form onSubmit={handleSubmit}>

          <select
            name="idepaquete"
            value={formData.idepaquete}
            onChange={handleChange}
            required
          >

            <option value="">
              Selecciona un tour
            </option>

            {

              paquetes.map((paquete) => (

                <option
                  key={paquete.idpaquete}
                  value={paquete.idpaquete}
                >

                  {paquete.nompaquete}

                </option>

              ))

            }

          </select>

          <input
            type="date"
            name="fechaviaje"
            value={formData.fechaviaje}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="cantidadpersonas"
            min="1"
            max="4"
            value={formData.cantidadpersonas}
            onChange={handleChange}
            required
          />

          {

            paqueteSeleccionado && (

              <div className="precio-preview">

                <p>

                  Precio por persona:
                  {" "}
                  $

                  {

                    paqueteSeleccionado
                      .precio
                      ?.toLocaleString()

                  }

                </p>

                <h3>

                  Total:
                  {" "}
                  $

                  {

                    (
                      paqueteSeleccionado.precio *
                      formData.cantidadpersonas
                    ).toLocaleString()

                  }

                </h3>

              </div>

            )

          }

          <button type="submit">

            {

              editando
                ? "Actualizar"
                : "Reservar"

            }

          </button>

        </form>

      </div>

    </div>

  )

}

export default ReservaForm