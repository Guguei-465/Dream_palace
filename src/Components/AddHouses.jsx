import React, { useState } from "react";
import axios from "axios";

function AddHouses() {
  // form states
  const [house_name, setHouseName] = useState("");
  const [house_description, setHouseDescription] = useState("");
  const [house_price, setHousePrice] = useState("");
  const [house_location, setHouseLocation] = useState("");
  const [house_photo, setHousePhoto] = useState(null);

  // status states
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Uploading house...");
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();

      // MUST MATCH FLASK KEYS EXACTLY
      formData.append("house_name", house_name);
      formData.append("house_description", house_description);
      formData.append("house_price", house_price);
      formData.append("house_location", house_location);
      formData.append("house_photo", house_photo);

      const response = await axios.post(
        "http://ryacksonfungo.alwaysdata.net/api/add_house",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess(response.data.success || "House added successfully!");
      setLoading("");

      // clear form
      setHouseName("");
      setHouseDescription("");
      setHousePrice("");
      setHouseLocation("");
      setHousePhoto(null);

    } catch (err) {
      setError(err.message || "Something went wrong");
      setLoading("");
    }
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-md-6 card shadow p-4">

          <h3 className="text-center mb-4">Add House</h3>

          {/* messages */}
          {loading && <p className="text-primary">{loading}</p>}
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}

          <form onSubmit={handleSubmit}>

            {/* house name */}
            <input
              type="text"
              placeholder="House name"
              className="form-control mb-3"
              value={house_name}
              onChange={(e) => setHouseName(e.target.value)}
              required
            />

            {/* description */}
            <textarea
              placeholder="House description"
              className="form-control mb-3"
              value={house_description}
              onChange={(e) => setHouseDescription(e.target.value)}
              required
            />

            {/* price */}
            <input
              type="number"
              placeholder="House price"
              className="form-control mb-3"
              value={house_price}
              onChange={(e) => setHousePrice(e.target.value)}
              required
            />

            {/* location */}
            <input
              type="text"
              placeholder="House location"
              className="form-control mb-3"
              value={house_location}
              onChange={(e) => setHouseLocation(e.target.value)}
              required
            />

            {/* image */}
            <input
              type="file"
              className="form-control mb-3"
              accept="image/*"
              onChange={(e) => setHousePhoto(e.target.files[0])}
              required
            />

            {/* submit */}
            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Add House"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHouses;