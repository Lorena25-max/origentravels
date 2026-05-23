import Swal from "sweetalert2"

import { loginUser } from "../../api/auth"

import { useNavigate } from "react-router-dom"

function LoginForm() {

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const form =
      new FormData(e.currentTarget)

    const data =
      Object.fromEntries(form.entries())

    try {

      const response =
        await loginUser(data)

      // 🔥 validar backend
      if (!response.cliente) {

        return Swal.fire({
          icon: "error",
          title: "Error",
          text:
            response.message
            ||
            "Login incorrecto"
        })

      }

      // 🔥 guardar usuario REAL
      localStorage.setItem(
        "user",
        JSON.stringify(response.cliente)
      )

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión exitoso"
      })

      navigate("/dashboard")

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message
          ||
          error.message
      })

    }

  }

  return (

    <div className="login-card">

      <h2>
        Iniciar Sesión
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />

        <button type="submit">
          Ingresar
        </button>

      </form>

      <div className="auth-extra">

        <p>
          ¿No tienes cuenta?
        </p>

        <button
          type="button"
          onClick={() => navigate("/register")}
        >
          Registrarse
        </button>

      </div>

    </div>

  )

}

export default LoginForm