function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-brand">Gilgal Tours</p>

                <p className="footer-text">
                    Experiencias que marcan nuevos comienzos.
                </p>

                <small className="footer-copy">
                    © {new Date().getFullYear()} Todos los derechos reservados
                </small>
            </div>
        </footer>
    )
}

export default Footer