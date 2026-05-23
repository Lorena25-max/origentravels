import { useEffect, useState } from "react"

const PAQUETES = {

  PT001: {
    nombre: "Tour Café",
    precio: 180000
  },

  PT002: {
    nombre: "Guatapé",
    precio: 250000
  },

  PT003: {
    nombre: "Comuna 13",
    precio: 120000
  }

}

const initialState = {

  idepaquete: "",

  fechaviaje: "",

  cantidadpersonas: 1

}

function ReservaForm({
  onSubmit,
  editando
}) {

  const [formData, setFormData] =
    useState(initialState)

  useEffect(() => {

    if (editando) {

      setFormData(editando)

    } else {

      setFormData(initialState)

    }

  }, [editando])

  const handleChange = (e) => {

    const { name, value } = e.target

    if (name === "cantidadpersonas") {

      const numero = Number(value)

      if (numero > 4) return

    }

    setFormData({

      ...formData,

      [name]: value

    })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    // 🔥 usuario logueado REAL
    const usuario =
      JSON.parse(localStorage.getItem("user"))

    const paqueteSeleccionado =
      PAQUETES[formData.idepaquete]

    const total =
      paqueteSeleccionado.precio
      *
      Number(formData.cantidadpersonas)

    const reservaCompleta = {

      idreserva:

  editando?.idreserva

  ||

  `R${Math.floor(
    100 + Math.random() * 900
  )}`,

      // 🔥 CLIENTE REAL
      idecliente:
        usuario.idecliente,

      idepaquete:
        formData.idepaquete,

      fechareserva:
        new Date()
          .toISOString()
          .split("T")[0],

      fechaviaje:
        formData.fechaviaje,

      totalpagado: total,

      cantidadpersonas:
        Number(
          formData.cantidadpersonas
        ),

      estado: "ACTIVA"

    }

    onSubmit(reservaCompleta)

    setFormData(initialState)

  }

  return (

    <div className="reserva-form-container">

      <div className="reserva-card">

        <h2>

          {
            editando
              ? "Editar Reserva"
              : "Nueva Reserva"
          }

        </h2>

        <form onSubmit={handleSubmit}>

          <select

            name="idepaquete"

            value={formData.idepaquete}

            onChange={handleChange}

            required

          >

            <option value="">
              Selecciona un tour
            </option>

            <option value="PT001">
              ☕ Tour Café
            </option>

            <option value="PT002">
              🏞️ Guatapé
            </option>

            <option value="PT003">
              🎨 Comuna 13
            </option>

          </select>

          <input

            type="date"

            name="fechaviaje"

            value={formData.fechaviaje}

            onChange={handleChange}

            required

          />

          <input

            type="number"

            name="cantidadpersonas"

            min="1"

            max="4"

            value={formData.cantidadpersonas}

            onChange={handleChange}

            required

          />

          {

            formData.idepaquete && (

              <div className="precio-preview">

                <p>

                  Precio por persona:
                  {" "}
                  $

                  {

                    PAQUETES[
                      formData.idepaquete
                    ]
                    .precio
                    .toLocaleString()

                  }

                </p>

                <h3>

                  Total:
                  {" "}
                  $

                  {

                    (
                      PAQUETES[
                        formData.idepaquete
                      ]
                      .precio
                      *
                      formData.cantidadpersonas
                    )
                    .toLocaleString()

                  }

                </h3>

              </div>

            )

          }

          <button type="submit">

            {
              editando
                ? "Actualizar"
                : "Reservar"
            }

          </button>

        </form>

      </div>

    </div>

  )

}

export default ReservaForm