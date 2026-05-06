import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const MpesaPayment = () => {
  const location = useLocation();
  const product = location.state?.product; // SAFE FIX

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://ryacksonfungo.alwaysdata.net/static/images/";

  // function to make payment
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product) {
      setError("No product selected");
      return;
    }

    setLoading("Please wait as we process the transaction...");
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("amount", product.product_cost);

      const response = await axios.post(
        "https://modcom2026.alwaysdata.net/api/mpesa_payment",
        formData
      );

      setSuccess(response.data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    console.log("Product:", product);
  }, [product]);

  // IMPORTANT: Prevent crash
  if (!product) {
    return <h3>Please Book First</h3>;
  }

  return (
    <div className="row justify-content-center">
      <h3>Payment Method : Mpesa</h3>

      {loading && <p>{loading}</p>}
      {success && <p className="text-dark">{success}</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="col-md-6 card shadow mt-2 bg-info p-3">

        <img
          src={img_url + product.product_photo}
          alt={product.product_name}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />

        <div>
          <h5>Booked Name: {product.product_name}</h5>
          <p>Item Cost :<b className="text-warning"> Ksh. 100/day</b></p>

          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button className="btn btn-dark m-2">
              Make payment
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default MpesaPayment;