import Tours from "../components/tours/Tours"

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>¡Descubre Medellín!</h1>
          <p>
            Cada lugar tiene una historia… ven a caminarla.
            <br/>Explora Medellín con experiencias que despiertan los sentidos.
          </p>
        </div>
      </section>

      <Tours />   
    </>
  )
}

export default Home