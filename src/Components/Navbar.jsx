import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [user, setUser] = useState(null);

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

    navigate("/Signup");
  };

  // SEARCH
  const handleSearch = (e) => {

    e.preventDefault();

    if (search.trim() !== "") {

      navigate("/Search", {

        state: {

          query: search

        }
      });

      setSearch("");

      // CLOSE NAVBAR AFTER SEARCH
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100"
      style={{
        zIndex: 1000,
        padding: "18px 50px",
        background: "rgba(226, 212, 15, 0.7)",
        backdropFilter: "blur(12px)",
      }}
    >

      {/* LOGO */}
      <NavLink
        className="navbar-brand fw-bold text-white"
        to="/"
        onClick={closeNavbar}
      >
        DREAM
        <span style={{ color: "#11100f" }}>
          {" "}PALACE
        </span>
      </NavLink>

      {/* TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

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
          style={{ width: "320px" }}
        >

          <input
            type="text"
            placeholder="Search what you wants here..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="form-control"
            style={{
              borderRadius: "30px 0 0 30px",
              border: "none",
              padding: "8px 15px",
              outline: "none",
            }}
          />

          <button
            type="submit"
            className="btn"
            style={{
              background: "#d4af37",
              color: "#111",
              fontWeight: "600",
              borderRadius: "0 30px 30px 0",
              padding: "8px 15px",
            }}
          >
            Search
          </button>

        </form>

        {/* LINKS */}
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

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
                <span className="nav-link text-warning fw-semibold">
                  {user.username}
                </span>
              </li>

              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-warning"
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

              <li className="nav-item ">
                <NavLink
                  className="nav-link custom-link  btn btn-warning bg-dark  mt-3"
                  to="/Mpesa"
                  onClick={closeNavbar}
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