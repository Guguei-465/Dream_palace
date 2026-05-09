import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Search() {

  const location = useLocation();
  const navigate = useNavigate();

  // SEARCH QUERY
  const query =
    location.state?.query?.toLowerCase() || "";

  // STATES
  const [products, setProducts] = useState([]);
  const [houses, setHouses] = useState([]);
  const [menu, setMenu] = useState([]);

  const [loading, setLoading] = useState(true);

  // IMAGE URL
  const img_url =
    "https://ryacksonfungo.alwaysdata.net/static/images/";

  // FETCH DATA
  useEffect(() => {

    const fetchAll = async () => {

      try {

        const [p, h, m] = await Promise.all([

          axios.get(
            "https://ryacksonfungo.alwaysdata.net/api/get_product_details"
          ),

          axios.get(
            "https://ryacksonfungo.alwaysdata.net/api/get_houses"
          ),

          axios.get(
            "https://ryacksonfungo.alwaysdata.net/api/get_menu"
          ),

        ]);

        setProducts(p.data || []);
        setHouses(h.data || []);
        setMenu(m.data || []);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    };

    fetchAll();

  }, []);

  // FILTER PRODUCTS
  const filteredProducts = products.filter(
    (p) =>
      p.product_name
        ?.toLowerCase()
        .includes(query)
  );

  // FILTER HOUSES
  const filteredHouses = houses.filter(
    (h) =>
      h.house_name
        ?.toLowerCase()
        .includes(query)
  );

  // FILTER MENU
  const filteredMenu = menu.filter(
    (m) =>
      m.menu_name
        ?.toLowerCase()
        .includes(query)
  );

  // CHECK RESULTS
  const noResults =
    filteredProducts.length === 0 &&
    filteredHouses.length === 0 &&
    filteredMenu.length === 0;

  return (
    <div
      className="container py-5"
      style={{
        minHeight: "100vh",
        color: "#fff",
      }}
    >

      {/* HEADER */}
      <div className="text-center mb-5">

        <h2
          style={{
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Search Results
        </h2>

        <p
          style={{
            color: "#d4af37",
            fontSize: "18px",
          }}
        >
          You searched for:
          <span
            style={{
              marginLeft: "8px",
              fontWeight: "700",
            }}
          >
            "{query}"
          </span>
        </p>

      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center">
          <h5>
            Searching the entire project...
          </h5>
        </div>
      )}

      {/* NO RESULTS */}
      {!loading && noResults && (
        <div
          className="text-center p-5"
          style={{
            background:
              "rgba(255,255,255,0.05)",
            borderRadius: "20px",
          }}
        >

          <h3 className="text-danger">
            No Results Found
          </h3>

          <p style={{ color: "#ccc" }}>
            No matching results were found
            for:
            <strong> "{query}" </strong>
          </p>

          <button
            className="btn btn-warning mt-3"
            onClick={() => navigate("/")}
          >
            Go Back Home
          </button>

        </div>
      )}

      {/* PRODUCTS */}
      {filteredProducts.length > 0 && (
        <>

          <h3 className="mb-4 text-warning">
            🛍 Products
          </h3>

          <div className="row">

            {filteredProducts.map((p) => (

              <div
                key={p.id}
                className="col-md-4 mb-4"
              >

                <div
                  className="card h-100 shadow"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >

                  <img
                    src={
                      img_url +
                      p.product_photo
                    }
                    alt={p.product_name}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">

                    <h5>{p.product_name}</h5>

                    <p className="text-muted">
                      {p.product_description}
                    </p>

                    <button
                      className="btn btn-dark"
                      onClick={() =>
                        navigate("/GetProduct")
                      }
                    >
                      View Product
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* HOUSES */}
      {filteredHouses.length > 0 && (
        <>

          <h3 className="mb-4 text-warning">
            🏠 Houses
          </h3>

          <div className="row">

            {filteredHouses.map((h) => (

              <div
                key={h.id}
                className="col-md-4 mb-4"
              >

                <div
                  className="card h-100 shadow"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >

                  <img
                    src={
                      img_url +
                      h.house_photo
                    }
                    alt={h.house_name}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">

                    <h5>{h.house_name}</h5>

                    <p className="text-muted">
                      {h.house_description}
                    </p>

                    <button
                      className="btn btn-dark"
                      onClick={() =>
                        navigate("/Houses")
                      }
                    >
                      View House
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* MENU */}
      {filteredMenu.length > 0 && (
        <>

          <h3 className="mb-4 text-warning">
            🍔 Menu
          </h3>

          <div className="row">

            {filteredMenu.map((m) => (

              <div
                key={m.id}
                className="col-md-4 mb-4"
              >

                <div
                  className="card h-100 shadow"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >

                  <img
                    src={
                      img_url +
                      m.menu_photo
                    }
                    alt={m.menu_name}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">

                    <h5>{m.menu_name}</h5>

                    <p className="text-muted">
                      {m.menu_description}
                    </p>

                    <button
                      className="btn btn-dark"
                      onClick={() =>
                        navigate("/Menu")
                      }
                    >
                      View Menu
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default Search;
