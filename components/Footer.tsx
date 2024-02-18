import Link from "next/link";

const footerNavigation = {
  connect: [
    { name: "Contact Us", href: "mailto:phasezeronp@gmail.com" },
    { name: "Facebook", href: "https://www.facebook.com/phasezero.clo/" },
    { name: "Instagram", href: "https://www.instagram.com/phasezero.clo/" },
    { name: "TikTok", href: "https://www.tiktok.com/@phasezero.clo" },
  ],
};

const Footer = () => {
  return (
    <div className="content-container flex flex-col justify-center items-center pt-10 pb-5">
      <span className="text-xl text-gray-500">
        © Copyright 2024 Phase Zero
      </span>
    </div>
  );
};

export default Footer;
