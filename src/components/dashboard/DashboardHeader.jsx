function DashboardHeader({ totalReservas }) {

  const user =
    JSON.parse(localStorage.getItem("user"))

  return (

    <div className="dashboard-header">

      <div>


        <h2>
          Bienvenida, {user?.nombre}
        </h2>

        <p>
          Gestiona tus experiencias en Medellín
        </p>

      </div>

      <div className="dashboard-stats">

        <h3>
          {totalReservas}
        </h3>

        <p>
          Reservas activas
        </p>

      </div>

    </div>

  )

}

export default DashboardHeader