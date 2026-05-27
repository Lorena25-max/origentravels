import { useEffect, useState } from "react"

import TourCard from "../components/tours/TourCard"

import { obtenerPaquetes }
from "../api/paqueteApi"

import guatape
from "../assets/images/guatape.jfif"

import comuna
from "../assets/images/comuna.jfif"

import cafe
from "../assets/images/cafe.jfif"

import jardin
from "../assets/images/jardin.jfif"

import centromedellin
from "../assets/images/centromedellin.jfif"

import santafeantioquia
from "../assets/images/santafeantioquia.jfif"

function Tours() {

  const [tours, setTours] =
    useState([])

  // 🔥 imágenes locales
  const imagenes = {

    PT001: guatape,

    PT002: santafeantioquia,

    PT003: comuna,

    PT004: centromedellin,

    PT005: cafe,

    PT006: jardin

  }

  useEffect(() => {

    cargarPaquetes()

  }, [])

  const cargarPaquetes = async () => {

    const data =
      await obtenerPaquetes()

    setTours(data)

  }

  return (

    <section className="tours">

      <h2>
        Nuestros Tours
      </h2>

      <div className="tours-container">

        {

          tours.map((tour) => (

            <TourCard

              key={tour.idpaquete}

              idpaquete={
                tour.idpaquete
              }

              title={
                tour.nompaquete
              }

              image={
                imagenes[
                  tour.idpaquete
                ]
              }

              description={
                tour.incluye
              }

            />

          ))

        }

      </div>

    </section>

  )

}

export default Tours