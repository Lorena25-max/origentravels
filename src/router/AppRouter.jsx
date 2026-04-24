import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Tours from "../pages/Tours"
import Reserva from "../pages/Reserva"
import Contact from "../pages/Contact"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRouter