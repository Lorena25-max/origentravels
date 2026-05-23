function Analytics() {

  return (

    <div className="analytics-page">

      <h1 className="analytics-title">
        Gráficas
      </h1>

      {/* =========================
          CLIENTES
      ========================= */}

      <section className="analytics-section">

        <h2>Clientes</h2>

        <div className="analytics-grid">

          <img
            src="/graficos/lineas_clientes_fecha.png"
            alt="Lineas clientes"
          />

          <img
            src="/graficos/barras_clientes_apellido.png"
            alt="Barras clientes"
          />

          <img
            src="/graficos/torta_clientes_apellido.png"
            alt="Torta clientes"
          />

          <img
            src="/graficos/mapa_calor_clientes.png"
            alt="Mapa calor clientes"
          />

        </div>

      </section>

      {/* =========================
          DESTINOS
      ========================= */}

      <section className="analytics-section">

        <h2>Destinos</h2>

        <div className="analytics-grid">

          <img
            src="/graficos/lineas_destinos_ciudad.png"
            alt="Lineas destinos"
          />

          <img
            src="/graficos/barras_destinos.png"
            alt="Barras destinos"
          />

          <img
            src="/graficos/torta_destinos.png"
            alt="Torta destinos"
          />

          <img
            src="/graficos/mapa_calor_destinos.png"
            alt="Mapa calor destinos"
          />

        </div>

      </section>

      {/* =========================
          PAGOS
      ========================= */}

      <section className="analytics-section">

        <h2>Pagos</h2>

        <div className="analytics-grid">

          <img
            src="/graficos/lineas_pagos_fecha.png"
            alt="Lineas pagos"
          />

          <img
            src="/graficos/barras_pagos_metodo.png"
            alt="Barras pagos"
          />

          <img
            src="/graficos/torta_pagos_metodo.png"
            alt="Torta pagos"
          />

          <img
            src="/graficos/mapa_calor_pagos.png"
            alt="Mapa calor pagos"
          />

        </div>

      </section>

      {/* =========================
          PAQUETES
      ========================= */}

      <section className="analytics-section">

        <h2>Paquetes Turísticos</h2>

        <div className="analytics-grid">

          <img
            src="/graficos/lineas_paquetes_duracion.png"
            alt="Lineas paquetes"
          />

          <img
            src="/graficos/barras_paquetes_incluye.png"
            alt="Barras paquetes"
          />

          <img
            src="/graficos/torta_paquetes_incluye.png"
            alt="Torta paquetes"
          />

          <img
            src="/graficos/mapa_calor_paquetes.png"
            alt="Mapa calor paquetes"
          />

        </div>

      </section>

      {/* =========================
          RESERVAS
      ========================= */}

      <section className="analytics-section">

        <h2>Reservas</h2>

        <div className="analytics-grid">

          <img
            src="/graficos/lineas_reservas_fecha.png"
            alt="Lineas reservas"
          />

          <img
            src="/graficos/barras_reservas_estado.png"
            alt="Barras reservas"
          />

          <img
            src="/graficos/torta_reservas_estado.png"
            alt="Torta reservas"
          />

          <img
            src="/graficos/mapa_calor_reservas.png"
            alt="Mapa calor reservas"
          />

        </div>

      </section>

    </div>

  )

}

export default Analytics