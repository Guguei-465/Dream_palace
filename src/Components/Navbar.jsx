import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [user, setUser] = useState(null);

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

    navigate("/Signup");
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

        background: "rgba(226, 212, 15, 0.7)",

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

      <div
        className={
          isOpen
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        }
        id="navbarNav"
      >

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

          <li className="nav-item">

            <NavLink
              className="nav-link custom-link"
              to="/"
              onClick={closeNavbar}
            >
              Home
            </NavLink>

          </li>

          <li className="nav-item">

            <NavLink
              className="nav-link custom-link"
              to="/Videos"
              onClick={closeNavbar}
            >
              Videos
            </NavLink>

          </li>

          {user ? (

            <>

              <li className="nav-item">

                <span className="nav-link text-dark fw-bold">
                  {user.username}
                </span>

              </li>

              <li className="nav-item">

                <button
                  onClick={handleLogout}
                  className="btn btn-dark mt-2"
                >
                  Logout
                </button>

              </li>

            </>

          ) : (

            <>

              <li className="nav-item">

                <NavLink
                  className="nav-link custom-link"
                  to="/Menu"
                  onClick={closeNavbar}
                >
                  Menu
                </NavLink>

              </li>

              <li className="nav-item">

                <NavLink
                  className="nav-link custom-link"
                  to="/Houses"
                  onClick={closeNavbar}
                >
                  Houses
                </NavLink>

              </li>

              <li className="nav-item">

                <NavLink
                  className="nav-link text-white fw-semibold mt-2"
                  to="/Mpesa"
                  onClick={closeNavbar}
                  style={{
                    background: "#111",
                    borderRadius: "30px",
                    display: "inline-block",
                    padding: "8px 20px",
                    width: "auto",
                    fontSize: "14px",
                    textDecoration: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  }}
                >
                  Book Now
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