import Marquee from "react-fast-marquee";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-light mt-5"
      style={{
        background: "#0f172a",
      }}
    >
      <div className="container py-5">
        <div className="row">

          {/* BRAND */}
          <div className="col-md-4 mb-4">

            <h4
              style={{
                fontWeight: "700",
                color: "#d4af37",
              }}
            >
              Dream Palace
            </h4>

            <p
              className="small"
              style={{
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              We offer a better environment for
              sleeping, relaxing, having fun,
              and enjoying luxury comfort with affordable cost. you are highly welcome!
            </p>

          </div>

          {/* ABOUT */}
          <div className="col-md-4 mb-4">

            <h5
              style={{
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              About Us
            </h5>

            <p
              className="small"
              style={{
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              At Dream Palace, we provide premium
              services and environments designed
              for comfort, relaxation, and luxury
              experiences for all visitors.
            </p>

          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-4">

            <h5
              style={{
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              Contact Us
            </h5>

            <p className="small mb-2">
               dreampalace@gmail.com
            </p>

            <p className="small mb-2">
               +254717250034
            </p>

            <p className="small mb-4">
               Juba, South Sudan
            </p>

            {/* SOCIALS */}
            <h6
              style={{
                color: "#d4af37",
                marginBottom: "15px",
              }}
            >
              Find Us On
            </h6>

            <div className="d-flex gap-3">

              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={socialStyle}
              >
                <FaFacebookF />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={socialStyle}
              >
                <FaInstagram />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/254717250034"
                target="_blank"
                rel="noreferrer"
                style={socialStyle}
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          background: "#111827",
          padding: "10px 0",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Marquee speed={50} gradient={false}>
          ⚡ D.P. All rights reserved @DreamPalace
          ⚡ Welcome! *..Developed by @ryackson..*
        </Marquee>
      </div>

    </footer>
  );
};

// SOCIAL ICON STYLE
const socialStyle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textDecoration: "none",
  fontSize: "18px",
  transition: "0.3s ease",
  border: "1px solid rgba(255,255,255,0.08)",
};

export default Footer;