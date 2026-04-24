import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

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
    </nav>
  )
}

export default Navbar