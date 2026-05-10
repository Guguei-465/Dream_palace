import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {

  const [user, setUser] = useState(null);

  // SEARCH STATE
  const [search, setSearch] = useState("");

  // NAVBAR STATE
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // GET USER
  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {

      setUser(
        JSON.parse(storedUser)
      );
    }

  }, []);

  // CLOSE NAVBAR
  const closeNavbar = () => {

    setIsOpen(false);

  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser(null);

    setIsOpen(false);

    navigate("/Signin");
  };

  // SEARCH
  const handleSearch = (e) => {

    e.preventDefault();

    if (search.trim() !== "") {

      navigate("/Search", {

        state: {

          query: search,

        },
      });

      setSearch("");

      setIsOpen(false);
    }
  };

  return (

    <nav
      className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100"
      style={{
        zIndex: 1000,

        padding:
          window.innerWidth <= 768
            ? "12px 15px"
            : "18px 50px",

        background:
          "rgba(226, 212, 15, 0.7)",

        backdropFilter: "blur(12px)",
      }}
    >

      {/* LOGO */}
      <NavLink
        className="navbar-brand fw-bold text-white"
        to="/"
        onClick={closeNavbar}
        style={{
          fontSize:
            window.innerWidth <= 768
              ? "20px"
              : "28px",
        }}
      >

        DREAM

        <span style={{ color: "#11100f" }}>
          {" "}PALACE
        </span>

      </NavLink>

      {/* TOGGLER */}
      <button
        className="navbar-toggler border-0"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >

        <span
          className="navbar-toggler-icon"
          style={{
            filter: "invert(1)",
          }}
        ></span>

      </button>

      {/* NAV LINKS */}
      <div
        className={
          isOpen
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        }
        id="navbarNav"
      >

        {/* SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="d-flex mx-auto"
          style={{
            width:
              window.innerWidth <= 768
                ? "100%"
                : "320px",

            marginTop:
              window.innerWidth <= 768
                ? "15px"
                : "0",
          }}
        >

          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="form-control"
            style={{
              borderRadius: "30px 0 0 30px",

              border: "none",

              padding: "10px 15px",

              outline: "none",

              fontSize: "14px",
            }}
          />

          <button
            type="submit"
            className="btn"
            style={{
              background: "#111",

              color: "#fff",

              borderRadius: "0 30px 30px 0",

              padding: "10px 18px",

              border: "none",

              fontWeight: "600",
            }}
          >

            <i className="bi bi-search"></i>

          </button>

        </form>

        {/* LINKS */}
        <ul
          className="navbar-nav ms-auto align-items-lg-center gap-lg-3"
          style={{
            textAlign:
              window.innerWidth <= 768
                ? "center"
                : "left",

            marginTop:
              window.innerWidth <= 768
                ? "20px"
                : "0",
          }}
        >

          {/* HOME */}
          <li className="nav-item">

            <NavLink
              className="nav-link custom-link text-white fw-semibold"
              to="/"
              onClick={closeNavbar}
            >

              <i className="bi bi-house-fill me-2"></i>
              Home
            </NavLink>

          </li>

          {/* VIDEOS - PUBLIC */}
          <li className="nav-item">

            <NavLink
              className="nav-link custom-link text-white fw-semibold"
              to="/Videos"
              onClick={closeNavbar}
            >

              <i className="bi bi-play-circle-fill me-2"></i>

              Videos

            </NavLink>

          </li>

          {user ? (

            <>

              {/* MENU */}
              <li className="nav-item">

                <NavLink
                  className="nav-link custom-link text-white fw-semibold"
                  to="/Menu"
                  onClick={closeNavbar}
                >

                  <i className="bi bi-cup-hot-fill me-2"></i>
                  Menu
                </NavLink>

              </li>

              {/* HOUSES */}
              <li className="nav-item">

                <NavLink
                  className="nav-link custom-link text-white fw-semibold"
                  to="/Houses"
                  onClick={closeNavbar}
                >

                  <i className="bi bi-building-fill me-2"></i>
                  Houses
                </NavLink>

              </li>

              {/* BOOK NOW */}
              <li className="nav-item">

                <NavLink
                  className="nav-link text-white fw-semibold mt-2"
                  to="/Mpesa"
                  onClick={closeNavbar}
                  style={{
                    background: "#111",

                    borderRadius: "30px",

                    display: "inline-flex",

                    alignItems: "center",

                    gap: "8px",

                    padding: "8px 20px",

                    width: "auto",

                    fontSize: "14px",

                    textDecoration: "none",

                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.25)",
                  }}
                >

                  <i className="bi bi-cart-fill"></i>
                  Book Now
                </NavLink>

              </li>

              {/* USERNAME */}
              <li className="nav-item">

                <span className="nav-link text-dark fw-bold">

                  <i className="bi bi-person-circle me-2"></i>

                  {user.username}

                </span>

              </li>

              {/* LOGOUT */}
              <li className="nav-item">

                <button
                  onClick={handleLogout}
                  className="btn btn-dark mt-2"
                  style={{
                    borderRadius: "30px",
                    padding: "8px 18px",
                  }}
                >

                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>

              </li>

            </>

          ) : (

            <>

              {/* LOGIN */}
              <li className="nav-item">

                <NavLink
                  className="nav-link text-white fw-semibold mt-2"
                  to="/Signin"
                  onClick={closeNavbar}
                  style={{
                    background: "#111",

                    borderRadius: "30px",

                    display: "inline-flex",

                    alignItems: "center",

                    gap: "8px",

                    padding: "8px 20px",

                    width: "auto",

                    fontSize: "14px",

                    textDecoration: "none",

                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.25)",
                  }}
                >

                  <i className="bi bi-box-arrow-in-right"></i>
                  Login
                </NavLink>

              </li>

            </>

          )}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;