import { FaGithub } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5, FaS } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import videoSource from "./videos/4K_14.mp4";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { gsap } from "gsap";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".font-vegan", {
      opacity: 0,
      duration: 0.5,
      ease: "sine.inOut",
    }).to(".font-vegan", {
      opacity: 1,
      duration: 0.5,
      ease: "sine.inOut",
      delay: 1,
    });

    tl.from(".github-icon", {
      opacity: 0,
      x: -50,
      duration: 0.5,
      ease: "sine.inOut",
    }).to(".github-icon", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 1,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <div className="temp transition-all">
      <div className="absolute w-full h-full bg-black opacity-0 black-overlay"></div>
      <div className=" absolute object-cover z-10 w-full h-full overflow-hidden  opacity-20">
        <video
          src={videoSource}
          autoPlay
          loop
          muted
          className=" w-full h-screen object-cover"
          type="video/mp4"
        ></video>
      </div>
      <div className=" relative w-full h-screen px-10 py-10 bg-[black]">
        <span className=" absolute -rotate-3 font-vegan text-3xl text-[white] z-10">
          <a href="/" className=" transition-all duration-500 ">
            Divyam
          </a>
        </span>
        <div className=" absolute right-10 px-3 z-10">
          <a href="https://github.com/Divyamsirswal" target="_blank">
            <FaGithub className="github-icon text-3xl text-[white] transition-all duration-500 cursor-pointer " />
          </a>
        </div>
        <div className="absolute right-10 bottom-10 text-5xl text-right text-[white] z-10">
          <span className="relative group font-scremer cursor-pointer transition-all duration-700 text-right">
            A Tech Enthusiastic
            <span className="line m-1 bg-white absolute h-[2px] w-0 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <br />
          <span className="relative group font-scremer cursor-pointer transition-all duration-700 text-right">
            MERN stack Developer
            <span className="line m-1 bg-white absolute h-[2px] w-0 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <br />
          <span className="relative group font-scremer cursor-pointer transition-all duration-700 text-right">
            Algorithm
            <span className="line m-1 bg-white absolute h-[2px] w-0 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
      </div>
      <div className=" flex gap-5 h-screen w-full px-5 py-20  bg-[black] skills-section">
        <div className="bg-[#A3A3A3] w-full h-full px-8 py-20 rounded-md hover:scale-[101%] transition-all duration-500 ">
          <span className=" group absolute -rotate-2 font-vegan text-8xl text-[black]">
            <a href="/" className=" transition-all duration-700">
              Skills
            </a>
            <span className="line -mr-6  bg-black absolute h-[2px] w-0 bottom-0 left-5 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className=" text-left">
            <span className=" flex justify-between text-5xl relative group font-scremer cursor-text transition-all duration-700 text-right">
              Cpp
              <span>
                <TbBrandCpp />
              </span>
            </span>
            <span className=" flex justify-between text-5xl relative group font-scremer cursor-text transition-all duration-700 text-right">
              Javascript
              <span>
                <RiJavascriptFill />
              </span>
            </span>
            <span className=" flex justify-between text-5xl relative group font-scremer cursor-text transition-all duration-700 text-right">
              React
              <span>
                <IoLogoReact />
              </span>
            </span>
            <span className=" flex justify-between text-5xl relative group font-scremer cursor-text transition-all duration-700 text-right">
              HTML
              <span>
                <FaHtml5 />
              </span>
            </span>
            <span className=" flex justify-between text-5xl relative group font-scremer cursor-text transition-all duration-700 text-right">
              CSS
              <span>
                <FaCss3Alt />
              </span>
            </span>
            <span className=" flex justify-between text-5xl relative group font-scremer cursor-text transition-all duration-700 text-right">
              Tailwindcss
              <span>
                <SiTailwindcss />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col gap-5 px-5 py-10 h-screen w-full bg-[black] about-me-section">
        <div className="bg-[#A3A3A3] w-full h-full relative px-8 py-20 rounded-md transition-all duration-500 ">
          <span className=" group absolute cursor-pointer -rotate-2 font-vegan text-5xl text-[black]">
            <a href="/">About Me</a>
            <span className="line -mr-6  bg-black absolute h-[2px] w-0 bottom-0 left-5 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className=" absolute flex flex-col bottom-0  mt-10 px-10  py-10 text-[black] font-scremer text-xl sm:text-4xl">
            <div className=" relative">
              <h1 className="">
                "I am{" "}
                <span className=" text-3xl sm:text-5xl italic">
                  Divyam Sirswal
                </span>{" "}
                , a second-year student pursuing a Bachelor's degree in Computer
                Science and Engineering. <br /> I am particularly interested in
                delving into the <span className=" underline">MERN</span>{" "}
                (MongoDB, Express.js, React, Node.js) Stack, <br /> and I am
                passionate about solving algorithms. <br />
                Currently, my focus lies on enhancing my skills in backend
                development."
              </h1>
              <br />
              <h1 className=" text-[#404040]">
                "I am enthusiastic about the prospect of contributing to the
                field of technology and leveraging my academic foundation <br />{" "}
                to excel in the dynamic landscape of computer science."
              </h1>
            </div>
          </span>
        </div>
      </div>
      <div className=" relative h-screen w-full bg-[black] connect-section">
        <div className=" flex justify-center font-rmbold items-center py-20 text-3xl text-[white]">
          <span>Connect With Me</span>
        </div>
        <div className=" absolute flex w-full px-20 gap-5 justify-center align-center items-center -traslate-y-[50%] h-80 text-5xl sm:text-8xl text-[white]">
          <div className=" cursor-pointer   sm:w-[50%] flex gap-10 items-center justify-center p-10 rounded-full hover:bg-[#262626] transition-all duration-700">
            <a href="https://www.instagram.com/divyam_sirswal/" target="_blank">
              <FaInstagram className=" hover:scale-[104%] transition-all duration-500" />
            </a>
            <a
              href="https://in.linkedin.com/in/divyam-sirswal-10a87524a"
              target="_blank"
            >
              <FaLinkedin className=" hover:scale-[104%] transition-all duration-500" />
            </a>
            <a href="mailto:divyamsirswal361@gmail.com" target="_blank">
              <SiGmail className=" hover:scale-[104%] transition-all duration-500" />
            </a>
          </div>
        </div>
        <div className=" absolute flex text-[white] text-md font-thin justify-center align-bottom items-end right-10 bottom-0 left-10 py-2">
          <span>&#169;Divyam</span>
        </div>
      </div>
    </div>
  );
};

export default App;
