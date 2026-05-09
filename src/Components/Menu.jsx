import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Menu() {

  // NAVIGATION
  const navigate = useNavigate();

  // STATE
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH MENU ITEMS
  useEffect(() => {

    axios
      .get("https://ryacksonfungo.alwaysdata.net/api/get_menu")

      .then((response) => {
        setMenu(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  // MPESA PAYMENT FUNCTION
  const handleMpesaPayment = (item) => {

    // SEND PRODUCT TO MPESA PAGE
    navigate("/Mpesa", {
      state: { product: item }
    });

  };

  return (
    <div className="container py-5">

      {/* HEADING */}
      <div className="text-center mb-5">

        <p
          style={{
            letterSpacing: "3px",
            color: "#b48a2c",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "13px",
          }}
        >
          Delicious Meals
        </p>

        <h2
          style={{
            fontWeight: "700",
            fontSize: "40px",
          }}
        >
          Our Menu
        </h2>

      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-dark"></div>
        </div>
      )}

      {/* MENU GRID */}
      <div className="row g-4">

        {menu.map((item) => (

          <div className="col-md-4" key={item.id}>

            <div
              className="card border-0 shadow-sm h-100 menu-card"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >

              {/* IMAGE */}
              <div
                style={{
                  height: "250px",
                  overflow: "hidden",
                }}
              >

                <img
                  src={`http://ryacksonfungo.alwaysdata.net/static/images/${item.menu_photo}`}
                  alt={item.menu_name}
                  className="w-100 h-100 menu-image"
                  style={{
                    objectFit: "cover",
                  }}
                />

              </div>

              {/* BODY */}
              <div className="card-body p-4">

                {/* NAME */}
                <h5
                  style={{
                    fontWeight: "700",
                  }}
                >
                  {item.menu_name}
                </h5>

                {/* DESCRIPTION */}
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    minHeight: "60px",
                  }}
                >
                  {item.menu_description}
                </p>

                {/* PRICE */}
                <h6
                  style={{
                    color: "#b48a2c",
                    fontWeight: "700",
                  }}
                >
                  SSP. {item.menu_price}
                </h6>

                {/* ORDER BUTTON */}
                <button
                  onClick={() => handleMpesaPayment(item)}
                  className="order-btn mt-3"
                >
                  Order Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

     
    </div>
  );
}

export default Menu;