import { useNavigate } from "react-router-dom"

function TourCard({ title, image, description, price }) {

  const navigate = useNavigate()

  return (
    <div className="tour-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">${price}</span>

      <button onClick={() => navigate("/reserva")}>
        Reservar
      </button>
    </div>
  );
}

export default TourCard;