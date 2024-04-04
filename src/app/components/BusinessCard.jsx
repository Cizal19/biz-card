import "../globals.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const BusinessCard = ({ businessInfo }) => {
  const { name, address, phoneNumbers, logoUrl, services, socialLinks } =
    businessInfo;

  return (
    <div className="flex items-center justify-center h-screen bg-[#F5F5F5]">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center flex items-center">
        {/* Logo */}
        <div className="">
          <Image src={logoUrl} alt="Logo" width={250} height={100} />
        </div>
        {/* Vertical Line */}
        <div className="border-l-2 border-white h-24 mr-6"></div>
        {/* Business Info */}
        <div className="text-left">
          {/* Name */}
          <h3 className=" font-semibold text-2xl leading-9">{name}</h3>
          {/* Address */}
          <p className=" text-sm">
            {address.street}, {address.state}, {address.country}
          </p>

          {/* Phone Numbers */}
          <p className="mb-4 text-sm">{phoneNumbers.join(", ")}</p>
          {/* Spacer */}
          <div className="mb-4"></div>
          {/* Services */}
          <div className="text-left">
            <h4 className="font-bold ">Services</h4>
            {services.join(" | ")}
          </div>
          {/* Social Links */}
          <div className="mt-10 flex items-center justify-around">
            {socialLinks.website && (
              <a href={socialLinks.website} className="mx-2">
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{ color: "white", fontSize: "24px" }}
                />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} className="mx-2">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "white", fontSize: "24px" }}
                />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} className="mx-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "white", fontSize: "24px" }}
                />
              </a>
            )}
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} className="mx-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "white", fontSize: "24px" }}
                />
              </a>
            )}

            {socialLinks.x && (
              <a href={socialLinks.x} className="mx-2">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "white", fontSize: "24px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
