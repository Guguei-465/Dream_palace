import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Mpesa = () => {

  // GET PRODUCT/HOUSE/MENU FROM ROUTE
  const { product } = useLocation().state || {};

  // STATES
  const [phone, setPhone] = useState("");

  // STATUS STATES
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // IMAGE URL
  const img_url =
    "https://ryacksonfungo.alwaysdata.net/static/images/";

  // PAYMENT FUNCTION
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    if (!phone) {
      setError("Please enter MTN phone number");
      return;
    }

    if (!product) {
      setError("No product selected");
      return;
    }

    let formattedPhone = phone.trim();

    if (formattedPhone.startsWith("07")) {
      formattedPhone =
        "254" + formattedPhone.substring(1);
    }

    if (formattedPhone.startsWith("+254")) {
      formattedPhone =
        formattedPhone.replace("+", "");
    }

    if (
      !formattedPhone.startsWith("254") ||
      formattedPhone.length !== 12
    ) {

      setError(
        "Enter valid number e.g 0712345678"
      );

      return;
    }

    setLoading(
      "Please wait as we send payment request..."
    );

    try {

      const response = await axios.post(
        "https://modcom2026.alwaysdata.net/api/mpesa_payment",
        {

          phone: formattedPhone,

          amount:
            product?.product_cost ||
            product?.menu_price ||
            product?.house_price,

          product_name:
            product?.product_name ||
            product?.menu_name ||
            product?.house_name,
        }
      );

      setSuccess(
        response.data.CustomerMessage ||
        "Payment request sent successfully. Check your phone."
      );

      setPhone("");

    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        error.response?.data?.errorMessage ||
        "Payment failed. Please try again."
      );

    } finally {

      setLoading("");

    }
  };

  useEffect(() => {

    console.log(product);

  }, [product]);

  // NO PRODUCT
  if (!product) {

    return (
      <div className="mpesa-empty">
        <h3>No Product Selected</h3>
      </div>
    );
  }

  return (
    <div className="mpesa-container">

      {/* PAYMENT CARD */}
      <div className="mpesa-card">

        {/* IMAGE */}
        <div className="mpesa-image-wrapper">

          <img
            src={
              img_url +
              (
                product?.product_photo ||
                product?.menu_photo ||
                product?.house_photo
              )
            }

            alt={
              product?.product_name ||
              product?.menu_name ||
              product?.house_name
            }

            className="mpesa-image"
          />

          {/* BADGE */}
          <div className="mtn-badge">
            MTN MOMO
          </div>

        </div>

        {/* BODY */}
        <div className="mpesa-body">

          {/* HEADER */}
          <div className="mpesa-header">

            <h1 className="mpesa-title">
              MTN MOBILE MONEY
            </h1>

            <p className="mpesa-subtitle">
              Fast & Secure MTN Payment
            </p>

          </div>

          {/* SUCCESS */}
          {success && (
            <div className="mpesa-success">
              {success}
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="mpesa-error">
              {error}
            </div>
          )}

          {/* LOADING */}
          {loading && (
            <div className="mpesa-loading">
              {loading}
            </div>
          )}

          {/* DETAILS */}
          <div className="mpesa-details">

            <h4 className="mpesa-product-name">
              {
                product?.product_name ||
                product?.menu_name ||
                product?.house_name
              }
            </h4>

            <p className="mpesa-description">
              Complete your payment securely using MTN Mobile Money.
            </p>

            <h5 className="mpesa-price">
              SSP. {

                product?.product_cost ||

                product?.menu_price ||

                product?.house_price
              }
            </h5>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            <label className="mpesa-label">
              MTN Phone Number
            </label>

            <input
              type="tel"
              placeholder="0912345678"
              className="mpesa-input"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mpesa-btn"
            >
              {loading
                ? "Processing Payment..."
                : "Pay Now"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Mpesa;