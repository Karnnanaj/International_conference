// import React from "react";
import React, { Suspense, lazy } from "react";
import cardsImg from "../images/cards.webp";
import Marquee from "react-fast-marquee";
import herovid from "../videos/dot-waves.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { HashLink as Link } from "react-router-hash-link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import opticalogo from "../images/optica.png";
import spielogo from "../images/spie.png";
import ieeelogo from "../images/ieee.png";
import wonderlalogo from "../images/wonderla.png";
import football from "../images/neonfootball3.jpg";
import lasertag from "../images/lasertag.jpg";
import UVroom from "../images/UV_room.JPG";
import cditlogo from "../images/cdit.png";
import skymarklogo from "../images/skymarkLogo.jpg";
import decathlonlogo from "../images/decathlon.png";
import educarrerlogo from "../images/logo_educareer.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ispimage from "../images/isp1.png";
import cusatimg from "../images/cusat2.png";
import './animation.css';
import asset11 from "../images/200ppi/Asset11.png"
import asset12 from "../images/200ppi/Asset12.png"
import asset13 from "../images/200ppi/Asset13.png"
import asset21 from "../images/200ppi/Asset21.png"
import asset22 from "../images/200ppi/Asset22.png"
import asset23 from "../images/200ppi/Asset23.png"
import asset31 from "../images/200ppi/Asset31.png"
import asset32 from "../images/200ppi/Asset32.png"
import asset33 from "../images/200ppi/Asset33.png"
// import Spline from '@splinetool/react-spline';
import Footer from "./footer";
// import { SplineRuntime } from "@splinetool/runtime";
// import splineanimation from "./splineanimation";


// const Spline = lazy(() => import('@splinetool/react-spline'));


function Home() {

  

  if (!sessionStorage.getItem('hasScrolledToTop')) {
    // Scroll to the top smoothly
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // Set a flag in sessionStorage to mark that scrolling has occurred
    sessionStorage.setItem('hasScrolledToTop', 'true');
  }  
  useEffect(() => {
    Aos.init({ duration: 500, delay: 200 });
  });
  const slideAnimation = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      slideAnimation.start({
        x: 150,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4,
        },
      });
    }
    if (!inView) {
      slideAnimation.start({
        x: "200vw",
      });
    }
  }, [inView]);

  return (
    <div className="overflow-hidden bg-black text-black font-defmono w-full border-spacing-1 h-full border-white  ">
      <div>
        <div id="/" className=" w-full h-screen  z-0 ">
          <div className=" h-50  border-white">
            <Marquee
              id="linktotop"
              pauseOnHover="true"
              gradient={false}
              speed={60}
              className="border-b border-t border-white p-2 z-0 font-defmono "
            >
              <p className="text-1xl text-white mobile:text-3xl">
                |ETCH<span className="text-red-500">NEW</span>| {">"} 
                |LASER TAG TOURNAMENT| {">"} |GALLERY| {">"} |PROJECTS| 
                
              </p>
            </Marquee>
          </div>
          <div className=" w-full text-6xl pc:text-8xl grid justify-items-center ">
            <div className=" grid z-1 justify-items-center grid-cols-1 absolute self-center w-full text-center top-1/2 z-50  font-defmono">
              <h1 className="oversteer" id="waw">
                ETCHNEW 2025
              </h1>
              <div className="text-white">
                <p className="text-2xl tablet:text-4xl ">
                  JANUARY <br /> 2025
                </p>
              </div>
              {/* <LINK
                to="/reg_page"
                className="inline-block rounded-lg mt-10 w-72 bg-opacity-60 hover:bg-opacity-90  cursor-pointer bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-700"
                target="_blank"
              >
                <p>CLICK HERE</p>
              </LINK> */}
              {/* <div className="inline-block rounded-lg mt-10 w-72 bg-opacity-60 hover:bg-opacity-90  cursor-pointer bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-700" >
                <Link       
                to="/reg_page"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="hover:translate-y-2 transition duration-200  ease-in-out hover:underline hover:text-red-600 p-1   "
              >

                REGISTER
              </Link>
              </div> */}
            </div>
            
            <div
              className="fixed align-self-center inset-0 z-0 h-full w-full overflow-hidden" // Use `fixed` instead of `absolute`
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                // filter: "blur(5px)",
                // opacity: "0.9",
              }}
            > <video
              src={herovid}
              height="1080"
              width="1920"
              className="video -z-1 "
              loop
              autoPlay
              muted
              type="video/mp4"
            /> 
            {/* <video
              id="bgVideo"
              src={herovid}
              height="1080"
              width="1920"
              className="video -z-1"
              autoPlay
              muted
              loop
              type="video/mp4"
              onTimeUpdate={(e) => {
                const video = e.target;
                const fadeDuration = 1.0; // seconds to fade in and out
                if (video.duration) {
                  if (video.currentTime < fadeDuration) {
                    // Fade in
                    video.style.opacity = video.currentTime / fadeDuration;
                  } else if (video.currentTime > video.duration - fadeDuration) {
                    // Fade out
                    video.style.opacity =
                      (video.duration - video.currentTime) / fadeDuration;
                  } else {
                    video.style.opacity = 1;
                  }
                }
              }}
            /> */}
              {/* <div>
                <splineanimation scene="https://prod.spline.design/2OW-Jv0gowkYU1Lk/scene.splinecode" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div id="event">
        <div className="w-full pc:h-screen grid grid-flow-row pc:grid-flow-col tablet:grid-cols-2 items-center justify-evenly ">
          <div className="text-9xl ">
            <div className=" h-full w-screen">
              <div className="grid mt-40  tablet:ml-8  ">
              </div>
              <div ref={ref} className=" p-4">
            
                <div class="glitch-container">
                  <div class="cards-container">
                    <div class="card" id="card1">
                      <div class="glitch">
                        <img src={asset21} alt="Image 2"/>
                        <img src={asset22} alt="Image 2" class="glitch-layer glitch-layer-blue"/>
                        <img src={asset23} alt="Image 2" class="glitch-layer glitch-layer-red"/>
                      </div>
                    </div>
                    <div class="card" id="card2">
                      <div class="glitch">
                        <img src={asset11} alt="Image 3"/>
                        <img src={asset12} alt="Image 3" class="glitch-layer glitch-layer-blue"/>
                        <img src={asset13} alt="Image 3" class="glitch-layer glitch-layer-red"/>
                      </div>
                    </div>
                    <div class="card" id="card3">
                      <div class="glitch">
                        <img src={asset31} alt="Image 4"/>
                        <img src={asset32} alt="Image 4" class="glitch-layer glitch-layer-blue"/>
                        <img src={asset33} alt="Image 4" class="glitch-layer glitch-layer-red"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="grid items-center p-4  pc:pr-8 h-full text-justify  relative">
            <div className=" tablet:p-3 w-full p-[10px] h-auto bg-gray-900/40 rounded-lg shadow-lg">
              <p className="text-lg pc:text-2xl text-white self-center ">
                Etchnew is a two-day event that will consist of exhibitions,
                workshops, lecture series, games, and activities that will be held
                at ISP. It's scheduled to be held on January, 2025. Around 300+
                schools will be invited for the event with an expected footfall of
                2000+ students.
                <p className="hidden tablet:visible">
                  Etchnew will be preceded by promotional events including a neon
                  party, neon football tournament, and other engaging activities
                  held at CUSAT. The promotional events have an expected footfall
                  of 3000+ CUSATians. ETCHNEW was introduced with the sole purpose
                  to promote the importance of Optics and Photonics in our
                  community and make them aware of the exciting technological
                  breakthroughs of Optics.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div
          id="ISP&CUSAT"
          className="w-screen pc:hidden tablet:h-screen grid grid-flow-row tablet:grid-flow-col items-center "
        >
          <div
            className=" pc:grid items-center grid-flow-col  h-fit hidden pc:visible   "
            data-aos="fade-right"
            data-aos-easing="ease-in-quart"
            data-aos-duration="300"
            data-aos-delay="500"
          >
            <img
              src={cusatimg}
              alt=""
              className="w-[200px] pc:w-[80%] pc:h-auto  bg-white rounded-xl m-4 justify-self-center   "
              data-aos="fade-right"
              data-aos-easing="ease-in-quart"
              data-aos-duration="500"
              data-aos-delay="500"
            />
            <img
              src={ispimage}
              alt=""
              className="w-[200px] pc:w-[80%] pc:h-auto  bg-white rounded-xl m-4 justify-self-center    "
              data-aos="fade-right"
              data-aos-easing="ease-in-quart"
              data-aos-duration="500"
              data-aos-delay="300"
            />
          </div>
          <div
            className="tablet:pr-10 p-5 self-center gap-4   grid items-center"
            data-aos="fade-left"
            data-aos-easing="ease-in-quart"
            data-aos-duration="300"
            data-aos-delay="1000"
          >
            <div className="tablet:p-3 w-full h-auto p-[10px] bg-gray-900/40 rounded-lg shadow-lg  ">
              <div className=" grid grid-flow-col gap-0 items-center text-white w-full mb-4 ">
                <h1 className="text-3xl tablet:text-5xl text-white p-2">
                  About ISP
                </h1>
                <a
                  className="tablet:ml-2 justify-self-end mr-4"
                  href="https://photonics.cusat.ac.in/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bg-white rounded-lg shadow-lg  "
                    height="48"
                    width="48"
                  >
                    <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
                  </svg>
                </a>
              </div>
              <img
                src={ispimage}
                alt=""
                className="w-[200px] pc:w-[80%] pc:h-auto pc:hidden self-center m-auto  bg-white rounded-2xl pc:m-4 justify-self-center pc:mr-8 mb-2   "
              />
              <p className="  text-justify pc:text-xl text-white pt-4 ">
                International School of Photonics (ISP) came in to existence in
                1995 by restructuring and delinking the laser laboratories along
                with the faculty members of the laser group from the Department
                of Physics at Cochin University of Science and Technology.
                Manpower development and establishment of research activities in
                photonics and related fields are the major objectives of ISP.
              </p>
            </div>
            <div className="tablet:p-3 w-full h-auto bg-gray-900/40 rounded-lg p-[10px] shadow-lg  ">
              <div className=" grid grid-flow-col gap-0 items-center text-white w-full mb-4 ">
                <h1 className="text-3xl tablet:text-5xl text-white p-2">
                  About CUSAT
                </h1>
                <a
                  className="tablet:ml-2 justify-self-end mr-4"
                  href="https://cusat.ac.in/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="bg-white rounded-lg shadow-lg  "
                    height="48"
                    width="48"
                  >
                    <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
                  </svg>
                </a>
              </div>
              <img
                src={cusatimg}
                alt=""
                className="w-[200px] pc:w-[80%] pc:h-auto pc:hidden self-center m-auto  bg-white rounded-2xl pc:m-4 justify-self-center pc:mr-8 p-2 mb-2   "
              />
              <p className="  text-justify pc:text-xl text-white relative pt-4">
                CUSAT is an autonomous university owned by the state government.
                The university ranks at 51 in the Overall and 34 in the NIRF
                2022 University rankings. CUSAT has 3 campuses, 29 academic
                departments, and 7 centres. CUSAT provides education in the
                fields of Applied Science, Technology, Industry, Commerce,
                Management, and Social Sciences.
              </p>
            </div>
          </div>
        </div>

        <div
          id="ISP&CUSAT"
          className="w-screen  pc:visible tablet:h-screen grid grid-flow-row tablet:grid-flow-row items-center p-10 "
        >
          <div
            className=" pc:grid items-center grid-flow-col  h-fit hidden pc:visible p-10 grid-cols-[25%_75%]  "
            data-aos="fade-right"
            data-aos-easing="ease-in-quart"
            data-aos-duration="300"
            data-aos-delay="500"
          >
            <img
              src={ispimage}
              alt=""
              className="w-[200px] pc:w-[60%] pc:h-auto  bg-white rounded-xl  justify-self-center     "
              data-aos="fade-right"
              data-aos-easing="ease-in-quart"
              data-aos-duration="500"
              data-aos-delay="300"
            />
           
            <div className="tablet:p-3 w-full h-auto  bg-gray-900/40 rounded-lg shadow-lg  ">
              <div className=" grid grid-flow-col gap-0 items-center text-white w-full  ">
                <h1 className="text-2xl tablet:text-5xl text-white p-4">
                  About ISP
                </h1>
                <a
                  className="tablet:ml-2 justify-self-end mr-4"
                  href="https://photonics.cusat.ac.in/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" bg-white rounded-lg shadow-lg  "
                    height="48"
                    width="48"
                  >
                    <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
                  </svg>
                </a>
              </div>
              
              <p className="  text-justify pc:text-xl text-white pt-4">
                International School of Photonics (ISP) came in to existence in
                1995 by restructuring and delinking the laser laboratories along
                with the faculty members of the laser group from the Department
                of Physics at Cochin University of Science and Technology.
                Manpower development and establishment of research activities in
                photonics and related fields are the major objectives of ISP.
              </p>
            </div>
            
          </div>


          <div
            className=" pc:grid items-center grid-flow-col  h-fit hidden pc:visible p-10 grid-cols-[25%_75%]   "
            data-aos="fade-right"
            data-aos-easing="ease-in-quart"
            data-aos-duration="300"
            data-aos-delay="500"
          >
            <img
              src={cusatimg}
              alt=""
              className="w-[200px] pc:w-[60%] pc:h-auto  bg-white rounded-xl  justify-self-center     "
              data-aos="fade-right"
              data-aos-easing="ease-in-quart"
              data-aos-duration="500"
              data-aos-delay="300"
            />
            
            <div className="tablet:p-3 w-full h-auto bg-gray-900/40 rounded-lg shadow-lg  ">
              <div className=" grid grid-flow-col gap-0 items-center text-white w-full ">
                <h1 className="text-2xl tablet:text-5xl  text-white pb-4 p-4">
                  About CUSAT
                </h1>
                <a
                  className="tablet:ml-2 justify-self-end mr-4"
                  href="https://cusat.ac.in/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" bg-white rounded-lg shadow-lg "
                    height="48"
                    width="48"
                  >
                    <path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
                  </svg>
                </a>
              </div>
              
              <p className="  text-justify pc:text-xl text-white pt-4">
                CUSAT is an autonomous university owned by the state government.
                The university ranks at 51 in the Overall and 34 in the NIRF
                2022 University rankings. CUSAT has 3 campuses, 29 academic
                departments, and 7 centres. CUSAT provides education in the
                fields of Applied Science, Technology, Industry, Commerce,
                Management, and Social Sciences.
              </p>
            </div>
            
          </div>


          
        </div>

        <div className="pt-8 pc:pt-24 grid  w-screen h-fit  pc:mb-48 items-center mobile:p-8 font-defmono justify-items-center">
          <h1 className="text-5xl mobile:text-6xl grid justify-center snap-center font-defmono pt-10 mt-10 ">
            Events
          </h1>
          <div className="max-h-2 w-1/5 place-self-center pb-10  "></div>
          <div className="grid grid-flow-row tablet:grid-flow-row gap-4 pc:grid-cols-3  place-items-center  mobile:pb-0 pc:mr-4 pc:pl-10 pc:pr-10  ">
            {/* 1 */}
            <div className="border-white mobile:w-auto max-w-[800px] pc:mr-4 pc:ml-6 m-auto mobile:h-auto pc:h-[500px] content-start  grid place-items-center w-[320px]  mobile:pb-0     ">
              <div
                className="border-t-2 border-l-2 border-r-2 grid place-items-center rounded-xl overflow-clip"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <div className=" mobile:w-3/4 grid place-items-center">
                  <div className="resize">
                    <img
                      className="h-[200px] w-auto"
                      src={lasertag}
                      mb-20
                      alt="test"
                    />
                  </div>
                </div>
                <div className="positionrelative">
                  <div className="p-4 bg-white text-black pc:min-h-[330px]">
                    <h1 className="text-xl text-black underline underline-offset-4 pb-4">
                    Laser tag - Photon wars

                    </h1>
                    <p className=" text-left text-lg">
                    Experience an adrenaline-fueled battle of light and strategy in a futuristic
                    arena with glowing LEDs, lasers, and high-energy vibes. Armed with laser guns 
                    and sensor vests, team up for thrilling games where precision is key. 
                    Enjoy unforgettable fun and win exclusive prizes!
                    </p>
                  </div>
                </div>
                </div>
              </div>
            {/* 2 */}
            <div className="border-white mobile:w-auto max-w-[800px] pc:mr-4 pc:ml-6 m-auto mobile:h-auto pc:h-[500px] content-start  grid place-items-center w-[320px]  mobile:pb-0    ">
              <div
                className="border-t-2 border-l-2 border-r-2 grid place-items-center rounded-xl overflow-clip  "
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <div className=" mobile:w-3/4 grid place-items-center">
                  <div className="resize">
                    <img
                      className="h-[200px] w-auto "
                      src={football}
                      mb-20
                      alt="test"
                    />
                  </div>
                </div>
                <div className="positionrelative">
                  <div className="p-4 bg-white text-black pc:min-h-[330px]">
                    <h1 className="text-xl text-black  underline underline-offset-4 pb-4 ">
                      Neon Football
                    </h1>
                    <p className=" text-left text-lg">
                      In this radiant and colorful season of football it would be
                      nothing short of a crime not to present an ode to the game
                      that conquered a million hearts. We have tried to merge our
                      passion of light and football to create "Neon football"
                      immerse yourself in this game of mind and body.
                    </p>
                  </div>
                </div>
                </div>
              </div>
            {/* 3 */}
            <div className="border-white mobile:w-auto max-w-[800px] pc:mr-4 pc:ml-6 m-auto mobile:h-auto pc:h-[500px] content-start  grid place-items-center w-[320px]  mobile:pb-0     ">
              <div
                className="border-t-2 border-l-2 border-r-2 grid place-items-center rounded-xl overflow-clip"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
              >
                <div className=" mobile:w-3/4 grid place-items-center">
                  <div className="resize">
                    <img
                      className="h-[200px] w-auto"
                      src={UVroom}
                      mb-20
                      alt="test"
                    />
                  </div>
                </div>
                <div className="positionrelative">
                  <div className="p-4 bg-white text-black pc:min-h-[330px]">
                    <h1 className="text-xl text-black underline underline-offset-4 pb-4">
                      UV Room
                    </h1>
                    <p className=" text-left text-lg">
                    A mesmerizing room filled with vibrant fluorescent paintings that come alive under UV light, creating an ethereal glow and immersing visitors in a surreal, otherworldly atmosphere. Neon hues ripple across the walls like liquid light, igniting wonder and endless imagination.
                      <p className="text-white invisible">akdjhsfjhafjshjfhj </p>
                    </p>
                  </div>
                  </div>
              </div>
            </div>
            {/* 3 end */}
            {/* end */}
          </div>
        </div>
      </div>
      <div className=" w-full h-[50vh] tablet:h-screen grid text-center items-center justify-center m-auto pb-10 justify-items-center text-align-center ">
        <h1 className="text-4xl pc:text-5xl m-4 pb-10 snap-center font-defmono text-center  ">
          Our Sponsors
        </h1>
        <Swiper
          spaceBetween={50}
          navigation={true}
          autoplay
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="w-full external-buttons place-items-center  "
        >
          <SwiperSlide>
            <div className="grid w-full h-full  place-items-center place-items-middle content-start ">
              <img
                src={skymarklogo}
                alt=""
                className="bg-white w-[75%] pc:w-2/4 pc:max-w-4xl pl-20 pr-20"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid  w-full h-full place-items-center  ">
              <img
                src={educarrerlogo}
                alt=""
                className="bg-white w-[75%] pc:w-2/4 pc:max-w-4xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid w-full h-full  place-items-center content-start ">
              <img
                src={spielogo}
                alt=""
                className="bg-white w-[75%] pc:w-2/4 pc:max-w-4xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid  w-full h-full place-items-center  ">
              <img
                src={opticalogo}
                alt=""
                className="bg-white w-[75%] pc:w-2/4 pc:max-w-4xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid  w-full h-full place-items-center  ">
              <img
                src={ieeelogo}
                alt=""
                className="bg-white w-[75%] pc:w-2/4 pc:max-w-4xl"
              />
            </div>
          </SwiperSlide>
          
          {/* <SwiperSlide>
            <div className="grid w-full h-full  place-items-center content-start ">
              <img
                src={decathlonlogo}
                alt=""
                className="bg-white w-[75%] pc:w-2/4 pc:max-w-4xl p-8 tablet:p-20 mt-10 tablet:mt-20"
              />
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="grid  w-full h-full place-items-center pc:pt-14  ">
              <img
                src={cditlogo}
                alt=""
                className="bg-white w-[75%] p-10 pc:w-2/4 pc:max-w-4xl"
              />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      {/* <div className=" justify-items-center  border-t-2 border-white h-fit w-full grid mb-4 font-defmono  ">
        <h1
          id="contact"
          className="text-center pt-4 text-3xl pc:text-4xl underline underline-offset-8 pb-4 "
        >
          CONTACT US!
        </h1>
        <div className="grid grid-flow-row pc:grid-flow-col justify-around  relative ">
          <div className="grid grid-flow-row text-xl pc:text-2xl p-auto pl-4 items-center w-fit rounded-xl m-2 p-2 h-[90%] d">
            <p className=" underline underline-offset-8 pl-4 text-2xl pc:text-3xl">
              Office
            </p>
            <a
              href="http://photonics.cusat.ac.in/contact-us/"
              className="hover:scale-105 transition duration-200  p-2 w-fit"
            >
              The Director,
              <br />
              International School of Photonics, <br />
              Cochin University of Science and Technology, <br />
              South Kalamassery, <br />
              Cochin -22.
            </a>
          </div>
          <div className="grid grid-flow-row text-xl pc:text-2xl p-auto pl-4 items-center w-fit rounded-xl m-2 p-2 h-[90%] ">
            <p className=" underline underline-offset-8  text-2xl pc:text-3xl">
              Student Committee
            </p>
            <div className="text-left grid grid-flow-row pt-4 gap-2">
              <a
                href="tel:628-234-9338"
                className="hover:scale-110 transition duration-200 w-fit"
              >
                Arjun Rajeev: 62823 49338
              </a>
              <a
                className="hover:scale-110 transition duration-200 w-fit"
                href="tel:807-584-2406"
              >
                Arun Raj K: 80758 42406
              </a>
              <a
                className="hover:scale-110 transition duration-200 w-fit"
                href="tel:701-244-1198"
              >
                Yadhukrishan ET: 70124 41198
              </a>
            </div>
          </div>
        </div>

        <p className="text-2xl pc:text-2xl text-center border-t-2 border-white pt-2  w-full">
        Copyright <span className="text-red-600">ETCHNEW</span> 2025 &#169;
      </p>
      </div> */}
      <Footer/>
    </div>
  );
}

export default Home;

