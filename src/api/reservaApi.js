import axiosConfig from "./axiosConfig"

// 🔥 OBTENER SOLO RESERVAS DEL USUARIO
export const obtenerReservas = async () => {

  try {

    // 🔥 obtener usuario logueado
    const user =
      JSON.parse(localStorage.getItem("user"))

    // 🔥 validar usuario
    if (!user || !user.idecliente) {

      return []

    }

    // 🔥 endpoint filtrado
    const response =
      await axiosConfig.get(
        `/reservas/cliente/${user.idecliente}`
      )

    return response.data

  } catch (error) {

    console.error(
      "Error obteniendo reservas:",
      error
    )

    return []

  }

}

// 🔥 CREAR
export const crearReserva = async (data) => {

  try {

    const response =
      await axiosConfig.post(
        "/reservas",
        data
      )

    return {

      message:
        "Reserva creada correctamente",

      reserva:
        response.data

    }

  } catch (error) {

    console.error(

      "Error creando reserva:",

      error.response?.data
      ||
      error.message

    )

    throw error

  }

}

// 🔥 ELIMINAR
export const eliminarReserva = async (id) => {

  try {

    await axiosConfig.delete(
      `/reservas/${id}`
    )

    return {

      message:
        "Reserva eliminada"

    }

  } catch (error) {

    console.error(

      "Error eliminando reserva:",

      error.response?.data
      ||
      error.message

    )

    throw error

  }

}

// 🔥 ACTUALIZAR
export const actualizarReserva = async (reserva) => {

  try {

    const response =
      await axiosConfig.put(

        `/reservas/${reserva.idreserva}`,

        reserva

      )

    return {

      message:
        "Reserva actualizada",

      reserva:
        response.data

    }

  } catch (error) {

    console.error(

      "Error actualizando reserva:",

      error.response?.data
      ||
      error.message

    )

    throw error

  }

}