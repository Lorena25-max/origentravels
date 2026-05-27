import { useNavigate } from "react-router-dom";
import medellin from "../assets/images/centromedellin.jfif";
import comuna from "../assets/images/comuna.jfif";
import guatape from "../assets/images/guatape.jfif";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Descubre Medellín</h1>
          <p>
            Viajes diseñados para vivir experiencias auténticas,
            cómodas y memorables.
          </p>

          <button
  className="hero-btn"
  onClick={() => navigate("/tours")}
>
  Explorar experiencias
</button>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="experience">
        <div className="container">
          <h2>Vive Medellín de una forma diferente</h2>

          <p className="experience-text">
            En Origen Travel creemos que cada viaje debe sentirse especial.
            <br />Creamos experiencias seguras, cómodas y auténticas para que
            descubras la esencia de Medellín.
          </p>

          <div className="experience-grid">
            <div className="experience-card">
              <h3>🌿 Experiencias auténticas</h3>
              <p>Conoce lugares únicos, cultura local <br />y paisajes inolvidables.</p>
            </div>

            <div className="experience-card">
              <h3>✨ Atención personalizada</h3>
              <p>Te acompañamos antes, durante <br />y después de tu viaje.</p>
            </div>

            <div className="experience-card">
              <h3>🛡️ Seguridad y confianza</h3>
              <p>Trabajamos para que viajes tranquilo y disfrutes cada momento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="gallery">
        <div className="container">
          <h2>Destinos que te esperan</h2>

          <div className="gallery-grid">
            <img src={medellin} alt="Centro Medellín" />
            <img src={comuna} alt="Comuna 13" />
            <img src={guatape} alt="Guatapé" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-home">
        <div className="container">
          <h2>Tu próxima experiencia comienza aquí</h2>
          <p>Descubre planes, tours y experiencias diseñadas para ti.</p>

          <button
  className="hero-btn"
  onClick={() => navigate("/tours")}
>
  Ver servicios
</button>
        </div>
      </section>
    </>
  );
}

export default Home;