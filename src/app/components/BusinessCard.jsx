import Image from "next/image";

const BusinessCard = ({ businessInfo }) => {
  return (
    <div>
      <h2>{businessInfo.name}</h2>
      <p>
        Address: {businessInfo.address.street}, {businessInfo.address.state},{" "}
        {businessInfo.address.country}
      </p>
      <p>Phone Number: {businessInfo.phoneNumbers.join(", ")}</p>
      <Image src={businessInfo.logoUrl} alt="Logo" width={100} height={100} />
      <p>Services: {businessInfo.services.join(", ")}</p>
      <div>
        <p>
          Website:{" "}
          <a href={businessInfo.socialLinks.website}>
            {businessInfo.socialLinks.website}
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a href={businessInfo.socialLinks.instagram}>
            {businessInfo.socialLinks.instagram}
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a href={businessInfo.socialLinks.facebook}>
            {businessInfo.socialLinks.facebook}
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href={businessInfo.socialLinks.linkedin}>
            {businessInfo.socialLinks.linkedin}
          </a>
        </p>
        <p>
          X:{" "}
          <a href={businessInfo.socialLinks.x}>{businessInfo.socialLinks.x}</a>
        </p>
      </div>
    </div>
  );
};

export default BusinessCard;
