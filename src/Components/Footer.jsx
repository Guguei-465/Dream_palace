import Marquee from "react-fast-marquee"

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5>Dream Palace website</h5>
            <p className="small">
              We offer better environment for sleeping, having fun and hanging out
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            
            <h3>About us</h3>
            <p><p>
            At Dream Palace, we specialize in offering premium environment and services designed to meet everyday needs. We are committed to innovation, quality, and excellent customer experience. Our mission is to make VIP and vister fill free and fill at home.
            </p></p>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="small mb-1">Email: dreampalace@gmail.com</p>
            <p className="small mb-1">Phone: +2119 456 789</p>
            <p className="small">Location: Juba City</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
    <Marquee speed={50} gradient={false}>
      ⚡  D.P. All rights reserved @dreampalace ⚡Welcome! 
      *..Developed by @ryackson..*
    </Marquee>
  
     </footer>
  )
}

export default Footer