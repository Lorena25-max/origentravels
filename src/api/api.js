export const crearReserva = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Reserva exitosa" })
    }, 1000)
  })
}