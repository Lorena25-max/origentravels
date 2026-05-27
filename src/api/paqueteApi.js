import axiosConfig from "./axiosConfig"

// 🔥 obtener paquetes
export const obtenerPaquetes = async () => {

  try {

    const response =
      await axiosConfig.get("/paquetes")

    return response.data

  } catch (error) {

    console.error(
      "Error obteniendo paquetes:",
      error
    )

    return []

  }

}