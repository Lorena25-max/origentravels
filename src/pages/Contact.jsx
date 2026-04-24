import { useState } from "react"
import Swal from "sweetalert2"

function Contact() {

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    intereses: [],
    mensaje: ""
  })

  // 🔹 manejar cambios con validación
  const handleChange = (e) => {
    const { name, value } = e.target

    // ✅ solo letras en nombre
    if (name === "nombre") {
      const soloLetras = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
      return setFormData({
        ...formData,
        [name]: soloLetras
      })
    }

    // ✅ solo números y máximo 15 dígitos
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

  // 🔹 manejar checkboxes
  const handleCheckbox = (e) => {
    const { value, checked } = e.target

    if (checked) {
      setFormData({
        ...formData,
        intereses: [...formData.intereses, value]
      })
    } else {
      setFormData({
        ...formData,
        intereses: formData.intereses.filter((item) => item !== value)
      })
    }
  }

  // 🔹 submit con validaciones reales
  const handleSubmit = (e) => {
    e.preventDefault()

    // ❌ validaciones
    if (!formData.nombre.trim()) {
      return Swal.fire("Error", "El nombre es obligatorio", "error")
    }

    if (formData.telefono.length < 7) {
      return Swal.fire("Error", "Teléfono inválido", "error")
    }

    if (!formData.correo.includes("@")) {
      return Swal.fire("Error", "Correo inválido", "error")
    }

    if (formData.intereses.length === 0) {
      return Swal.fire("Error", "Selecciona al menos un interés", "error")
    }

    if (!formData.mensaje.trim()) {
      return Swal.fire("Error", "El mensaje no puede estar vacío", "error")
    }

    // ✅ éxito solo si pasa validaciones
    Swal.fire({
      title: "Mensaje enviado",
      text: "Nos pondremos en contacto contigo",
      icon: "success"
    })

    // 🔄 reset completo
    setFormData({
      nombre: "",
      telefono: "",
      correo: "",
      intereses: [],
      mensaje: ""
    })
  }

  return (
    <section className="contact">
      <h2>Contáctanos</h2>

      <div className="contact-card">
        <form onSubmit={handleSubmit}>

          {/* Nombre */}
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          {/* Teléfono */}
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />

          {/* Correo */}
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <p>Intereses:</p>

          {/* ✅ ahora controlados */}
          <label>
            <input
              type="checkbox"
              value="Comuna 13"
              checked={formData.intereses.includes("Comuna 13")}
              onChange={handleCheckbox}
            />
            Comuna 13
          </label>

          <label>
            <input
              type="checkbox"
              value="Guatapé"
              checked={formData.intereses.includes("Guatapé")}
              onChange={handleCheckbox}
            />
            Guatapé
          </label>

          <label>
            <input
              type="checkbox"
              value="Café"
              checked={formData.intereses.includes("Café")}
              onChange={handleCheckbox}
            />
            Tour de café
          </label>

          <label>
            <input
              type="checkbox"
              value="Jardin"
              checked={formData.intereses.includes("Jardin")}
              onChange={handleCheckbox}
            />
            Jardín
          </label>

          <label>
            <input
              type="checkbox"
              value="Centro historico"
              checked={formData.intereses.includes("Centro historico")}
              onChange={handleCheckbox}
            />
            Centro histórico
          </label>

          <label>
            <input
              type="checkbox"
              value="Santa fe de Antioquia"
              checked={formData.intereses.includes("Santa fe de Antioquia")}
              onChange={handleCheckbox}
            />
            Santa fe de Antioquia
          </label>

          {/* Mensaje */}
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje o duda"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar</button>

        </form>
      </div>
    </section>
  )
}

export default Contact