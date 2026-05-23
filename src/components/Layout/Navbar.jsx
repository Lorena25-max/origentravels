import { useEffect, useState } from "react"

import {
  useNavigate,
  useLocation
} from "react-router-dom"

import Swal from "sweetalert2"

function Navbar() {

  const navigate = useNavigate()

  const location = useLocation()

  // 🔥 estado reactivo
  const [user, setUser] = useState(null)

  // 🔥 detectar cambios de ruta
  useEffect(() => {

    try {

      const usuarioGuardado =
        localStorage.getItem("user")

      // 🔥 evitar JSON roto
      if (
        !usuarioGuardado
        ||
        usuarioGuardado === "undefined"
      ) {

        setUser(null)

        return
      }

      const usuario =
        JSON.parse(usuarioGuardado)

      setUser(usuario)

    } catch (error) {

      console.error(error)

      localStorage.removeItem("user")

      setUser(null)

    }

  }, [location])

  const handleLogout = () => {

    localStorage.removeItem("user")

    setUser(null)

    Swal.fire({
      icon: "success",
      title: "Sesión cerrada"
    })

    navigate("/login")

  }

  return (

    <nav className="nav">

      <button
        className="nav-btn"
        onClick={() => navigate("/")}
      >
        ¿Quiénes somos?
      </button>

      <button
        className="nav-btn"
        onClick={() => navigate("/tours")}
      >
        Servicios
      </button>

      <button
        className="nav-btn"
        onClick={() => navigate("/contact")}
      >
        Contacto
      </button>

      <button
      className="nav-btn"
      onClick={() => navigate("/analytics")}
      >
        Analítica
      </button>

      {

        !user ? (

          <>

            <button
              className="nav-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="nav-btn"
              onClick={() => navigate("/register")}
            >
              Registro
            </button>

          </>

        ) : (

          <>

            <button
              className="nav-btn"
              onClick={() => navigate("/dashboard")}
            >
              Mis reservas
            </button>

            <button
              className="nav-btn logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        )

      }

    </nav>

  )

}

export default Navbar