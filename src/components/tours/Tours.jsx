import { useEffect } from "react"
import TourCard from "./TourCard"

import guatape from "../../assets/images/guatape.jfif"
import comuna from "../../assets/images/comuna.jfif"
import cafe from "../../assets/images/cafe.jfif"
import jardin from "../../assets/images/jardin.jfif"
import centromedellin from "../../assets/images/centromedellin.jfif"
import santafeantioquia from "../../assets/images/santafeantioquia.jfif"

function Tours() {

  useEffect(() => {
    console.log("Cargando tours automáticamente...")
  }, [])

  const tours = [
    {
      id: 1,
      title: "Tour Comuna 13",
      image: comuna,
      description: "Explora el arte urbano y la historia.",
      price: 50
    },
    {
      id: 2,
      title: "Guatapé y Piedra del Peñol",
      image: guatape,
      description: "Disfruta paisajes increíbles.",
      price: 80
    },
    {
      id: 3,
      title: "Tour de café",
      image: cafe,
      description: "Explora el arte del buen café.",
      price: 50
    },
    {
      id: 4,
      title: "Conoce Jardín",
      image: jardin,
      description: "Disfruta paisajes increíbles.",
      price: 80
    },
    {
      id: 5,
      title: "Tour centro histórico",
      image: centromedellin,
      description: "Explora el centro histórico de Medellín, su arte y su cultura.",
      price: 50
    },
    {
      id: 6,
      title: "Santa fe de Antioquia",
      image: santafeantioquia,
      description: "Disfruta de un pueblo hermoso con arquitectura colonial.",
      price: 80
    }
  ]

  return (
    <section className="tours">
      <h2>Nuestros Tours</h2>

      <div className="tours-container">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            title={tour.title}
            image={tour.image}
            description={tour.description}
            price={tour.price}
          />
        ))}
      </div>
    </section>
  )
}

export default Tours