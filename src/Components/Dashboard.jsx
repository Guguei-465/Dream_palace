import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div className="container text-center mt-5">

      <h1 className="mb-4 fw-bold">
        Welcome to Dream Palace
      </h1>

      <div className="row justify-content-center">

        {/* HOUSES CARD */}
        <div
          className="col-md-3 m-3 card p-4 shadow"
          style={{
            borderRadius: "20px",
            border: "none",
          }}
        >

          <h3 className="mb-3">
            Houses
          </h3>

          <p className="text-muted">
            Explore our luxury and modern houses.
          </p>

          <Link
            to="/Houses"
            className="btn btn-warning mt-3"
            style={{
              padding: "6px 16px",
              fontSize: "14px",
              borderRadius: "25px",
              width: "auto",
              display: "inline-block",
              fontWeight: "600",
            }}
          >
            Explore Houses
          </Link>

        </div>

        {/* MENU CARD */}
        <div
          className="col-md-3 m-3 card p-4 shadow"
          style={{
            borderRadius: "20px",
            border: "none",
          }}
        >

          <h3 className="mb-3">
            Menu
          </h3>

          <p className="text-muted">
            Check delicious foods and drinks available.
          </p>

          <Link
            to="/Menu"
            className="btn btn-warning mt-3"
            style={{
              padding: "6px 16px",
              fontSize: "14px",
              borderRadius: "25px",
              width: "auto",
              display: "inline-block",
              fontWeight: "600",
            }}
          >
            View Menu
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;