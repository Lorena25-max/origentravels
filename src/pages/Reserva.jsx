import { useState, useEffect } from "react"
import { crearReserva } from "../api/api"
import Swal from "sweetalert2"

const initialState = {
  nombre: "",
  telefono: "",
  codigoPais: "+57",
  correo: "",
  fecha: "",
  personas: 1,
  tour: "",
  mensaje: ""
}

function Reserva() {

  const [formData, setFormData] = useState(initialState)

  // 🔴 BORRAR localStorage al cargar la página
  useEffect(() => {
    localStorage.removeItem("reserva")
  }, [])

  // 🔹 manejar cambios con validaciones
  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "nombre") {
      const soloLetras = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
      return setFormData({
        ...formData,
        [name]: soloLetras
      })
    }

    if (name === "telefono") {
      const soloNumeros = value.replace(/\D/g, "").slice(0, 15)
      return setFormData({
        ...formData,
        [name]: soloNumeros
      })
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const today = new Date().toISOString().split("T")[0]

  // 🔹 submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.tour) {
      return Swal.fire("Error", "Debes seleccionar un tour", "error")
    }

    if (formData.personas < 1 || formData.personas > 4) {
      return Swal.fire("Error", "Solo se permiten entre 1 y 4 personas", "error")
    }

    if (formData.telefono.length < 7) {
      return Swal.fire("Error", "Número de teléfono inválido", "error")
    }

    try {
      const telefonoCompleto = `${formData.codigoPais}${formData.telefono}`

      const dataEnviar = {
        ...formData,
        telefono: telefonoCompleto
      }

      const response = await crearReserva(dataEnviar)

      // ✅ guardar en localStorage
      localStorage.setItem("reserva", JSON.stringify(formData))

      Swal.fire("Reserva exitosa", response.message, "success")

      // 🔴 LIMPIAR formulario
      setFormData(initialState)

      // 🔴 BORRAR localStorage después de guardar
      localStorage.removeItem("reserva")

    } catch (error) {
      Swal.fire("Error", error.message, "error")
    }
  }

  return (
    <section className="reserva">
      <h2>Reservar Tour</h2>

      <div className="reserva-card">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <select
            name="codigoPais"
            value={formData.codigoPais}
            onChange={handleChange}
          >
            <option value="+57">🇨🇴 Colombia (+57)</option>
            <option value="+1">🇺🇸 USA (+1)</option>
            <option value="+34">🇪🇸 España (+34)</option>
            <option value="+52">🇲🇽 México (+52)</option>
            <option value="+54">🇦🇷 Argentina (+54)</option>
          </select>

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="fecha"
            min={today}
            value={formData.fecha}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="personas"
            min="1"
            max="4"
            value={formData.personas}
            onChange={handleChange}
            required
          />

          <select
            name="tour"
            value={formData.tour}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un tour</option>
            <option value="cafe">☕ Tour de café</option>
            <option value="guatape">🏞️ Guatapé y Piedra del Peñol</option>
            <option value="santafe">🏛️ Santa Fe de Antioquia</option>
            <option value="comuna13">🎨 Comuna 13</option>
            <option value="centro">🏙️ Centro histórico</option>
            <option value="jardin">🌿 Jardín</option>
          </select>

          <textarea
            name="mensaje"
            placeholder="Requerimientos especiales o dudas"
            value={formData.mensaje}
            onChange={handleChange}
          />

          <button type="submit">Reservar</button>

        </form>
      </div>
    </section>
  )
}

export default Reserva