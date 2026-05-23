import axiosConfig from "./axiosConfig"

// 🔥 REGISTRO
export const registerUser = async (data) => {

  try {

    const response = await axiosConfig.post(
      "/auth/register",
      data
    )

    return response.data

  } catch (error) {

    throw error.response?.data || {
      message: "Error registrando usuario"
    }

  }

}

// 🔥 LOGIN
export const loginUser = async (data) => {

  try {

    const response = await axiosConfig.post(
      "/auth/login",
      data
    )

    // 🔥 GUARDAR usuario REAL en sesión
    localStorage.setItem(
      "user",
      JSON.stringify(response.cliente)
    )

    return response.data

  } catch (error) {

    throw error.response?.data || {
      message: "Error iniciando sesión"
    }

  }

}