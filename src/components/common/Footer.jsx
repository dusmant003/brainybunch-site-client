import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import siteConfig from "../../config/siteConfig";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1220] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TOP CONTACT BAR */}
        <div className="bg-[#2a3443] rounded-2xl px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-6 mb-16">

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              {siteConfig.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              {siteConfig.contact.email}
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-400" />
              {siteConfig.contact.address}
            </span>
          </div>

          <div className="flex gap-3">
            <a className="footer-social" href="#"><FaTwitter /></a>
            <a className="footer-social" href="#"><FaFacebookF /></a>
            <a className="footer-social" href="#"><FaInstagram /></a>
            <a className="footer-social" href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={siteConfig.branding.hkislogo}
                alt="logo"
                className="h-14"
              />
              <h2 className="text-2xl font-bold">
                {siteConfig.branding.title}
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Bright Beginnings Kindergarten is a learning space where children
              explore, play, and grow in a safe, loving, and creative environment.
            </p>
          </div>

          {/* QUICK LINKS (NAVBAR LINKS SAME) */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/About/about-vss">About Us</a></li>
              <li><a href="/Gallery/vss-gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h3 className="footer-title">Our Programs</h3>
            <ul className="footer-links">
              <li>Playgroup Program</li>
              <li>Nursery Program</li>
              <li>Junior KG Program</li>
              <li>Activity Programs</li>
            </ul>
          </div>

          {/* SCHOOL HOURS */}
          <div>
            <h3 className="footer-title">School Hours</h3>

            <ul className="text-sm space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span className="text-orange-400">Monday – Friday:</span>
                <span>9:00 AM – 12:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-orange-400">Saturday:</span>
                <span>9:00 AM – 11:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-orange-400">Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-400 py-6">
          © {new Date().getFullYear()} {siteConfig.branding.title}. All Rights Reserved.
        </div>
      </div>

      {/* SMALL HELPERS */}
      <style jsx>{`
        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .footer-links li {
          margin-bottom: 0.6rem;
          color: #cbd5e1;
          cursor: pointer;
        }
        .footer-links li:hover {
          color: white;
        }
        .footer-social {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .footer-social:hover {
          background: #ff7a18;
          border-color: #ff7a18;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
