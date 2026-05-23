import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

  const userString = localStorage.getItem("user")

  // 🔥 evitar JSON roto
  if (!userString || userString === "undefined") {

    return <Navigate to="/login" />

  }

  let user

  try {

    user = JSON.parse(userString)

  } catch (error) {

    localStorage.removeItem("user")

    return <Navigate to="/login" />

  }

  // 🔥 validación extra
  if (!user || !user.email) {

    return <Navigate to="/login" />

  }

  return children

}

export default ProtectedRoute