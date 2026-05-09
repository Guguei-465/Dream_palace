import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const GetProduct = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://ryacksonfungo.alwaysdata.net/static/images/";

  // GET PRODUCTS
  const getProduct = async () => {
    setLoading("Loading products...");

    try {
      const response = await axios.get(
        "https://ryacksonfungo.alwaysdata.net/api/get_product_details"
      );

      setProducts(response.data);
      setLoading("");

    } catch (err) {
      setError(err.message);
      setLoading("");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container py-5">

      {/* TITLE */}
      <h3 className="text-center mb-4 fw-bold text-warning">
        Welcome to Dream Palace
      </h3>

      {/* STATUS */}
      {loading && <p className="text-center text-info">{loading}</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* GRID */}
      <div className="row g-4">

        {products.map((product) => (
          <div className="col-md-4" key={product.id}>

            <div className="product-card">

              {/* IMAGE */}
              <div className="img-box">
                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                />
              </div>

              {/* CONTENT */}
              <div className="p-3">

                <h5 className="fw-bold">{product.product_name}</h5>

                <p className="text-muted small">
                  {product.product_description}
                </p>

                {/* PRICE ONLY IF EXISTS */}
                {product.product_cost && (
                  <b className="text-warning">
                    Ksh {product.product_cost}
                  </b>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default GetProduct;