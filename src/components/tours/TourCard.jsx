import { useNavigate } from "react-router-dom"

function TourCard({
  idpaquete,
  title,
  image,
  description
}) {

  const navigate = useNavigate()

  const handleReservar = () => {

    // 🔥 validar sesión
    const user =
      sessionStorage.getItem("user")

    // 🔥 si no está logueado
    if (!user) {

      navigate(
        `/login?paquete=${idpaquete}`
      )

      return

    }

    // 🔥 si ya inició sesión
    navigate(
      `/dashboard?paquete=${idpaquete}`
    )

  }

  return (

    <div className="tour-card">

      <img
        src={image}
        alt={title}
      />

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <button
        className="tour-btn"
        onClick={handleReservar}
      >

        Reservar

      </button>

    </div>

  )

}

export default TourCard