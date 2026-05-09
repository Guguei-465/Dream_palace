import { useEffect, useState } from "react";
import image1 from "../photo/image1.png";
import image2 from "../photo/image2.png";
import image3 from "../photo/image35.jpg";
import video1 from "../videos/sample6.mp4";
import video2 from "../videos/sample7.mp4";
import { Link } from "react-router-dom";

const slides = [
  {
    type: "image",
    src: image1,
    title: "Luxury Escape",
    description: "Discover premium comfort and unforgettable experiences.",
  },
  {
    type: "video",
    src: video1,
    title: "Live Experience",
    description: "Watch how Dream Palace looks inside in real life.",
  },
  {
    type: "image",
    src: image2,
    title: "Mountain Retreat",
    description: "Adventure and relaxation in one perfect destination.",
  },
  {
    type: "video",
    src: video2,
    title: "Virtual Tour",
    description: "Take a full walkthrough of our luxury houses.",
  },
  {
    type: "image",
    src: image3,
    title: "Urban Lifestyle",
    description: "Modern spaces designed for your perfect stay.",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="position-relative overflow-hidden rounded-4 shadow-sm mx-auto"
      style={{
        width: "95%",
        maxWidth: "1100px",
        height: "400px",
      }}
    >
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`position-absolute top-0 start-0 w-100 h-100 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          {/* IMAGE OR VIDEO */}
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

          {/* TEXT CONTENT */}
          <div
            className="position-absolute top-50 start-0 translate-middle-y text-white"
            style={{
              zIndex: 10,
              maxWidth: "500px",
              marginLeft: "70px",
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

            <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
              {slide.title}
            </h1>

            <p style={{ fontSize: "15px", color: "#e4e4e4" }}>
              {slide.description}
            </p>

            {/* LINK BUTTON */}
            <Link
              to="/Signup"
              className="btn"
              style={{
                background: "#fff",
                color: "#111",
                borderRadius: "30px",
                padding: "10px 22px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      ))}

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="position-absolute top-50 start-0 translate-middle-y border-0"
        style={arrowStyle}
      >
        ❮
      </button>

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
            onClick={() => setActiveIndex(index)}
            style={{
              width: activeIndex === index ? "25px" : "10px",
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

      {/* ARROW STYLE */}
      <style>{`
        .arrowBtn {
          z-index: 20;
        }
      `}</style>
    </div>
  );
};

const arrowStyle = {
  zIndex: 20,
  background: "rgba(255,255,255,0.15)",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  color: "white",
  backdropFilter: "blur(6px)",
};

export default Carousel;