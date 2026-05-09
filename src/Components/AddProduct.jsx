import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {

  // STATE VARIABLES
  const [product_name, setproductName] = useState("");
  const [product_description, setproductDescription] = useState("");
  const [product_photo, setproductPhoto] = useState(null);

  // STATUS
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // SUBMIT FUNCTION
  const handlesubmit = async (e) => {

    e.preventDefault();

    setLoading("Loading...");
    setError("");
    setSuccess("");

    try {

      const formData = new FormData();

      formData.append("product_name", product_name);
      formData.append(
        "product_description",
        product_description
      );

      formData.append(
        "product_photo",
        product_photo
      );

      const response = await axios.post(
        "https://ryacksonfungo.alwaysdata.net/api/add_product",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setSuccess(
        response.data.success ||
          "Product added successfully!"
      );

    } catch (error) {

      setError(
        error.message ||
          "Check for errors and try again"
      );

    } finally {

      setLoading("");

    }
  };

  return (

    <div className="row justify-content-center text-center">

      <div className="col-md-6 card shadow m-2 p-4 bg-light">

        {/* TITLE */}
        <h2 className="mb-4">
          Add Products
        </h2>

        {/* MESSAGES */}
        {loading && (
          <p className="text-dark">
            {loading}
          </p>
        )}

        {error && (
          <p className="text-danger">
            {error}
          </p>
        )}

        {success && (
          <p className="text-success">
            {success}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handlesubmit}>

          <input
            type="text"
            placeholder="Enter product name"
            className="form-control"
            value={product_name}
            onChange={(e) =>
              setproductName(e.target.value)
            }
            required
          />

          <br />

          <textarea
            placeholder="Enter product description"
            className="form-control"
            value={product_description}
            onChange={(e) =>
              setproductDescription(
                e.target.value
              )
            }
          ></textarea>

          <br />

          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) =>
              setproductPhoto(
                e.target.files[0]
              )
            }
            required
          />

          <br />

          <input
            type="submit"
            value={
              loading
                ? "Adding..."
                : "Add Product"
            }
            disabled={loading}
            className="btn btn-warning w-50"
          />

        </form>

      </div>

    </div>
  );
};

export default AddProduct;