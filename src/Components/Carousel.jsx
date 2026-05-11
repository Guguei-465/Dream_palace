import { useEffect, useState } from "react";
import image1 from "../photo/image1.png";
import image2 from "../photo/image2.png";
import image3 from "../photo/image35.jpg";
import video1 from "../videos/sample6.mp4";
import video2 from "../videos/sample7.mp4";
import { Link, useNavigate } from "react-router-dom";

const slides = [
  {
    type: "image",
    src: image1,
    title: "Luxury Escape",
    description:
      "Discover premium comfort and unforgettable experiences.",
  },

  {
    type: "video",
    src: video1,
    title: "Live Experience",
    description:
      "Watch how Dream Palace looks inside in real life.",
  },

  {
    type: "image",
    src: image2,
    title: "Mountain Retreat",
    description:
      "Adventure and relaxation in one perfect destination.",
  },

  {
    type: "video",
    src: video2,
    title: "Virtual Tour",
    description:
      "Take a full walkthrough of our luxury houses.",
  },

  {
    type: "image",
    src: image3,
    title: "Urban Lifestyle",
    description:
      "Modern spaces designed for your perfect stay.",
  },
];

const Carousel = () => {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [search, setSearch] =
    useState("");

  const navigate = useNavigate();

  // AUTO SLIDE
  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex(
        (prev) => (prev + 1) % slides.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  // NEXT
  const nextSlide = () => {

    setActiveIndex(
      (prev) => (prev + 1) % slides.length
    );

  };

  // PREVIOUS
  const prevSlide = () => {

    setActiveIndex((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );

  };

  // SEARCH
  const handleSearch = (e) => {

    e.preventDefault();

    if (search.trim() !== "") {

      navigate("/Search", {

        state: {

          query: search,

        },
      });

      setSearch("");
    }
  };

  return (

    <div
      className="position-relative overflow-hidden rounded-4 shadow-lg mx-auto"
      style={{
        width: "95%",
        maxWidth: "1100px",

        marginTop:
          window.innerWidth <= 768
            ? "110px"
            : "95px",

        height:
          window.innerWidth <= 768
            ? "480px"
            : "400px",
      }}
    >

      {/* SLIDES */}
      {slides.map((slide, index) => (

        <div
          key={index}
          className={`position-absolute top-0 start-0 w-100 h-100 ${
            activeIndex === index
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{
            transition:
              "opacity 0.8s ease-in-out",
          }}
        >

          {/* IMAGE */}
          {slide.type === "image" ? (

            <img
              src={slide.src}
              alt={slide.title}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                filter: "brightness(60%)",
              }}
            />

          ) : (

            <video
              src={slide.src}
              className="w-100 h-100"
              autoPlay
              muted
              loop
              style={{
                objectFit: "cover",
                filter: "brightness(60%)",
              }}
            />

          )}

          {/* DARK OVERLAY */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.2))",
            }}
          ></div>

          {/* CONTENT */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 text-white"
            style={{
              zIndex: 20,
            }}
          >

            {/* SEARCH BAR */}
            <div
              className="position-absolute start-50 translate-middle-x"
              style={{
                top:
                  window.innerWidth <= 768
                    ? "85px"
                    : "25px",

                width:
                  window.innerWidth <= 768
                    ? "92%"
                    : "430px",

                zIndex: 30,
              }}
            >

              <form
                onSubmit={handleSearch}
                className="d-flex shadow-lg"
              >

                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="form-control"
                  style={{
                    borderRadius:
                      "30px 0 0 30px",

                    border: "none",

                    padding: "12px 18px",

                    outline: "none",

                    fontSize: "15px",
                  }}
                />

                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "#d4af37",

                    color: "#111",

                    borderRadius:
                      "0 30px 30px 0",

                    padding: "12px 22px",

                    fontWeight: "600",

                    border: "none",

                    whiteSpace: "nowrap",
                  }}
                >
                  Search
                </button>

              </form>

            </div>

            {/* TEXT */}
            <div
              className="position-absolute top-50 start-0 translate-middle-y"
              style={{
                marginLeft:
                  window.innerWidth <= 768
                    ? "20px"
                    : "70px",

                marginTop:
                  window.innerWidth <= 768
                    ? "120px"
                    : "20px",

                maxWidth: "500px",
              }}
            >

              <p
                style={{
                  letterSpacing: "3px",

                  fontSize: "12px",

                  color: "#d1d1d1",

                  textTransform: "uppercase",
                }}
              >
                Premium Experience
              </p>

              <h1
                style={{
                  fontSize:
                    window.innerWidth <= 768
                      ? "30px"
                      : "48px",

                  fontWeight: "700",

                  lineHeight: "1.2",
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: "15px",

                  color: "#e4e4e4",

                  maxWidth: "450px",
                }}
              >
                {slide.description}
              </p>

              {/* BUTTON */}
              <Link
                to="/Signup"
                className="btn mt-3"
                style={{
                  background: "#d4af37",

                  color: "#111",

                  borderRadius: "30px",

                  padding: "12px 25px",

                  fontWeight: "600",

                  textDecoration: "none",

                  display: "inline-block",

                  border: "none",
                }}
              >
                Get Started
              </Link>

            </div>

          </div>

        </div>

      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="position-absolute top-50 start-0 translate-middle-y border-0"
        style={arrowStyle}
      >
        ❮
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="position-absolute top-50 end-0 translate-middle-y border-0"
        style={arrowStyle}
      >
        ❯
      </button>

      {/* INDICATORS */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3"
        style={{ zIndex: 20 }}
      >

        {slides.map((_, index) => (

          <div
            key={index}
            onClick={() =>
              setActiveIndex(index)
            }
            style={{
              width:
                activeIndex === index
                  ? "25px"
                  : "10px",

              height: "10px",

              borderRadius: "20px",

              background:
                activeIndex === index
                  ? "#fff"
                  : "rgba(255,255,255,0.5)",

              cursor: "pointer",

              transition: "0.3s",
            }}
          />

        ))}

      </div>

    </div>
  );
};

const arrowStyle = {

  zIndex: 20,

  background:
    "rgba(255,255,255,0.15)",

  width: "45px",

  height: "45px",

  borderRadius: "50%",

  color: "white",

  backdropFilter: "blur(6px)",
};

export default Carousel;