import { useEffect, useState } from "react"
import { obtenerPaquetes } from "../../api/paqueteApi"

function ReservasTable({
  reservas,
  onDelete,
  onEdit
}) {

  const [paquetes, setPaquetes] =
    useState([])

  useEffect(() => {

    cargarPaquetes()

  }, [])

  const cargarPaquetes = async () => {

    const data =
      await obtenerPaquetes()

    setPaquetes(data)

  }

  // 🔥 buscar paquete real
  const obtenerPaquete = (id) => {

    return paquetes.find(
      paquete =>
        paquete.idpaquete === id
    )

  }

  // 🔥 total general
  const totalGeneral = reservas.reduce(

    (acc, reserva) =>

      acc + (reserva.totalpagado || 0),

    0

  )

  return (

    <div className="reservas-container">

      <h2>
        Mis Reservas
      </h2>

      {

        reservas.length === 0 ? (

          <div className="empty-state">

            <h3>
              Aún no tienes reservas
            </h3>

            <p>
              ¡Comienza reservando una experiencia!
            </p>

          </div>

        ) : (

          <>

            {

              reservas.map((reserva) => {

                const paquete =
                  obtenerPaquete(
                    reserva.idepaquete
                  )

                return (

                  <div
                    key={reserva.idreserva}
                    className="tabla-reserva"
                  >

                    <h3>

                      {
                        paquete?.nompaquete
                      }

                    </h3>

                    <p>

                      ID Reserva:
                      {" "}

                      {
                        reserva.idreserva
                      }

                    </p>

                    <p>

                      Fecha viaje:
                      {" "}

                      {
                        reserva.fechaviaje
                      }

                    </p>

                    <p>

                      Personas:
                      {" "}

                      {
                        reserva.cantidadpersonas
                      }

                    </p>

                    <p>

                      Precio por persona:
                      {" "}
                      $

                      {

                        paquete?.precio
                          ?.toLocaleString()

                      }

                    </p>

                    <h4>

                      Total:
                      {" "}
                      $

                      {

                        reserva.totalpagado
                          ?.toLocaleString()

                      }

                    </h4>

                    <p>

                      Estado:
                      {" "}

                      {
                        reserva.estado
                      }

                    </p>

                    <div className="acciones">

                      <button
                        onClick={() =>
                          onEdit(reserva)
                        }
                      >

                        Editar

                      </button>

                      <button
                        onClick={() =>
                          onDelete(
                            reserva.idreserva
                          )
                        }
                      >

                        Eliminar

                      </button>

                    </div>

                  </div>

                )

              })

            }

            <div className="total-general">

              <h2>

                Total acumulado:
                {" "}
                $

                {

                  totalGeneral
                    .toLocaleString()

                }

              </h2>

            </div>

          </>

        )

      }

    </div>

  )

}

export default ReservasTable