import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Houses() {

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("http://ryacksonfungo.alwaysdata.net/api/get_houses")

      .then((res) => res.json())

      .then((data) => {

        setHouses(data);
        setLoading(false);

      })

      .catch((err) => {

        console.log(err);

        setError(err.message);

        setLoading(false);

      });

  }, []);

  return (

    <div className="houses-page container py-5">

      {/* HEADER */}
      <h3 className="houses-title">
        Explore Our Houses
      </h3>

      {/* LOADING */}
      {loading && (
        <p className="houses-loading">
          Loading houses...
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p className="houses-error">
          {error}
        </p>
      )}

      {/* GRID */}
      <div className="row g-4">

        {houses.map((house) => (

          <div className="col-md-4" key={house.id}>

            <div className="house-card">

              {/* IMAGE */}
              <div className="house-image-wrapper">

                <img
                  src={`http://ryacksonfungo.alwaysdata.net/static/images/${house.house_photo}`}
                  alt={house.house_name}
                  className="house-image"
                />

              </div>

              {/* CONTENT */}
              <div className="house-content">

                <h5 className="house-name">
                  {house.house_name}
                </h5>

                <p className="house-description">
                  {house.house_description}
                </p>

                <p className="house-location">
                  {house.house_location}
                </p>

                <div className="house-price">
                  SSP. {house.house_price} / night
                </div>

                {/* BOOK BUTTON */}
                <Link
                  to="/Mpesa"
                  state={{ product: house }}
                  className="house-book-link"
                >
                  Book Now
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Houses;