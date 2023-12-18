import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Typist from "react-typist-component";
import { mainBody } from "../../Assets/config";

const Hero = () => {
  const { gradientColors, firstName, middleName, lastName, message, icons } =
    mainBody;
  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${gradientColors})`,
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white" id="home"
      style={gradientStyle}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {firstName} {middleName} {lastName}
        </h1>
        <Typist>
          <p className="text-lg mt-3">{message}</p>
        </Typist>
        <div className="flex justify-center mt-4 space-x-4">
          {icons.map((icon, index) => (
            <a key={index} href={icon.url} className="hover:text-gray-300">
              {icon.image === "fa-github" && <FaGithub size={30} />}
              {icon.image === "fa-instagram" && <FaInstagram size={30} />}
              {icon.image === "fa-facebook" && <FaFacebook size={30} />}
              {icon.image === "fa-linkedin" && <FaLinkedin size={30} />}
            </a>
          ))}
        </div>
        <a
          href="#about"
          className="mt-6 inline-block px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          More About Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
