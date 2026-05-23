import Swal from "sweetalert2"
import { registerUser } from "../../api/auth"
import { useNavigate } from "react-router-dom"

function RegisterForm() {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const form =
      new FormData(e.currentTarget)

    const data =
      Object.fromEntries(form.entries())

    if (data.password !== data.confirmPassword) {

      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden"
      })

    }

    // 🔥 objeto limpio para backend
    const usuario = {

      nomcliente: data.nombre,

      apellido: data.apellido,

      documento: data.documento,

      email: data.email,

      telcliente: data.telefono,

      password: data.password

    }

    try {

      const response =
        await registerUser(usuario)

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: response.message
      })

      navigate("/login")

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data
          ||
          error.message
      })

    }

  }

  return (

    <div className="register-card">

      <h2>
        Crear Cuenta
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          required
        />

        <input
          type="text"
          name="documento"
          placeholder="Documento"
          required
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          required
        />

        <button type="submit">
          Registrarse
        </button>

      </form>

    </div>

  )

}

export default RegisterForm