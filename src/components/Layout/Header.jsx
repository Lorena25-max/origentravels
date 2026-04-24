import Navbar from "./Navbar"
import logo from "../../assets/images/logogilgalsin.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="slogan">
                <div className="container header-content">

                    <p>Experiencias que marcan nuevos comienzos</p>

                    {/* 🔥 Botón a reservas */}
                    <Link to="/reserva">
                        <button className="booking">
                            Quiero reservar
                        </button>
                    </Link>

                </div>
            </div>

            <header className="header">
                <div className="container header-content">

                    {/* 🔥 Logo ahora redirige al home */}
                    <Link to="/">
                        <img 
                            src={logo} 
                            alt="Gilgal Tours Logo" 
                            className="logo"
                            style={{ cursor: "pointer" }}
                        />
                    </Link>

                    <Navbar/>
                </div>
            </header>
        </>
    )
}

export default Header