import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div className="container text-center mt-5">

      <h1 className="mb-4">
        Welcome to Dream Palace
      </h1>

      <div className="row justify-content-center">

        <div className="col-md-3 m-3 card p-4 shadow">
          <h3>Houses</h3>

          <Link
            to="/Houses"
            className="btn btn-warning mt-3"
          >
            Explore Houses
          </Link>
        </div>

        <div className="col-md-3 m-3 card p-4 shadow">
          <h3>Menu</h3>

          <Link
            to="/Menu"
            className="btn btn-warning mt-3"
          >
            View Menu
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;