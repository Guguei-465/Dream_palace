import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  // State variables
  const [product_name, setproductName] = useState("");
  const [product_description, setproductDescription] = useState("");
  // const [product_cost, setproductCost] = useState("");
  const [product_photo, setproductPhoto] = useState(null);

  // Status messages
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Submit function
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("loading...");
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      //  formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);
      console.log(formData)
      const response = await axios.post(
        "https://ryacksonfungo.alwaysdata.net/api/add_product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess(response.data.success || "Congratulations!");
    } catch (error) {
      setError(error.message || "Check for error and try again");
    } finally {
      setLoading("");
    }
  };

  return (
    <div className="row justify-content-center text-center">
      <div className="col-md-6 card shadow m-2 p-4 bg-light">
        <h1 className="text-light"></h1>

        {/* Messages */}
        {loading && <p className="text-dark">{loading}</p>}
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}

        <nav>
          {/* <Link to="/" className="btn btn-warning w-75"> */}
           <h2> Add products</h2>
          {/* </Link> */}
          <br />
          <br />
        </nav>

        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter product name"
            className="form-control"
            value={product_name}
            onChange={(e) => setproductName(e.target.value)}
            required
          />
          <br />

          <textarea
            placeholder="Enter product description"
            className="form-control"
            value={product_description}
            onChange={(e) => setproductDescription(e.target.value)}
          ></textarea>
          <br />

          {/* <input 
            type="number"
            placeholder="Enter cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => setproductCost(e.target.value)}
            required
           /> 
          <br /> */}

          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setproductPhoto(e.target.files[0])}
            required
          />
          <br />

          <input
            type="submit"
            value={loading ? "Adding..." : "Add product"}
            disabled={loading}
            className="btn btn-warning w-45"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;