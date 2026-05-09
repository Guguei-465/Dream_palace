import axios from "axios";
import React, { useState } from "react";

function AddMenu() {

  
  // STATE VARIABLES
  
  const [menu_name, setMenuName] = useState("");
  const [menu_description, setMenuDescription] = useState("");
  const [menu_price, setMenuPrice] = useState("");
  const [menu_photo, setMenuPhoto] = useState(null);

  // status messages
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



  
  // SUBMIT FUNCTION
   const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading("Adding menu...");
    setError("");
    setSuccess("");

    try {

      // form data
      const formData = new FormData();

      formData.append("menu_name", menu_name);
      formData.append("menu_description", menu_description);
      formData.append("menu_price", menu_price);
      formData.append("menu_photo", menu_photo);

      // API REQUEST
      const response = await axios.post(

        // IMPORTANT → HTTPS
        "https://ryacksonfungo.alwaysdata.net/api/add_menu",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // success message
      setSuccess(response.data.message || "Menu added successfully!");

      // clear form
      setMenuName("");
      setMenuDescription("");
      setMenuPrice("");
      setMenuPhoto(null);

    } catch (err) {

      console.log(err);

      setError("Failed to add menu. Please try again.");

    } finally {

      setLoading("");

    }
  };



  
  // UI
   return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div
            className="card shadow border-0 p-4"
            style={{
              borderRadius: "20px",
            }}
          >

            {/* TITLE */}
            <div className="text-center mb-4">

              <p
                style={{
                  letterSpacing: "3px",
                  color: "#b48a2c",
                  fontWeight: "600",
                  fontSize: "13px",
                  textTransform: "uppercase",
                }}
              >
                Restaurant Dashboard
              </p>

              <h2
                style={{
                  fontWeight: "700",
                }}
              >
                 Add Menu Item
              </h2>

            </div>



            {/* MESSAGES */}
            {loading && (
              <div className="alert alert-info">
                {loading}
              </div>
            )}

            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success">
                {success}
              </div>
            )}



            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="mb-3">

                <input
                  type="text"
                  placeholder="Enter menu name"
                  className="form-control"
                  value={menu_name}
                  onChange={(e) => setMenuName(e.target.value)}
                  required
                />

              </div>



              {/* DESCRIPTION */}
              <div className="mb-3">

                <textarea
                  placeholder="Enter menu description"
                  className="form-control"
                  rows="4"
                  value={menu_description}
                  onChange={(e) => setMenuDescription(e.target.value)}
                  required
                ></textarea>

              </div>



              {/* PRICE */}
              <div className="mb-3">

                <input
                  type="number"
                  placeholder="Enter menu price"
                  className="form-control"
                  value={menu_price}
                  onChange={(e) => setMenuPrice(e.target.value)}
                  required
                />

              </div>



              {/* IMAGE */}
              <div className="mb-4">

                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setMenuPhoto(e.target.files[0])}
                  required
                />

              </div>



              {/* BUTTON */}
              <button
                type="submit"
                className="btn w-100"
                disabled={loading}
                style={{
                  background: "#111",
                  color: "white",
                  borderRadius: "30px",
                  padding: "12px",
                  border: "none",
                  fontWeight: "600",
                }}
              >
                {loading ? "Adding..." : "AddMenu"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddMenu;