import React from "react";
import Footer from "./footer";
import treasure_hunt from "../images/treasure_hunt.jpg";
import { Link } from "react-router-dom";
function Events() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <div className="bg-black justify-items-center font-defmono text-white grid items-center h-auto w-full">
      {/* <h1 className="text-center text-8xl pt-20 underline decoration-1 tablet:underline-offset-[12px] underline-offset-8 pb-8">
        Events
      </h1> */}
      <div className="w-full justify-items-left mobile:h-auto pc:h-auto pb-20 text-center text-2xl">
        {/* <p className="pb-[69px]">
          The most anticipated event of all time "EtchNew'25" is finally here.
          <br />
          It will be held in four segments
        </p> */}
        <h2 className="text-left text-6xl pt-20 pl-[5%] underline decoration-1 tablet:underline-offset-[12px] underline-offset-8 pb-8">
          Treasure Hunt
        </h2>
        
        <p className="text-lg pc:text-2xl text-white self-center text-left pl-[5%] ">
          Team Barroz won the 2025 ETCHNEW Treasure Hunt, Congragulations!
        </p>
        <img
              src={treasure_hunt}
              alt=""
              className="w-[80%] pc:w-[50%] pc:h-auto  bg-white rounded-xl m-4 justify-self-center "
        />
        
          {/* <Link
            to="/treasurehunt_registration"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className=" pl-2   hover:translate-y-2 transition duration-200 ease-in-out hover:text-red-600 hover:underline "
          >
            <div className="inline-block rounded-lg mt-10 w-72 bg-opacity-60 hover:bg-opacity-100  cursor-pointer bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-700">
              Register
            </div>
          </Link> */}
        
        {/* <div className="grid grid-flow-row pc:grid-flow-col mx-4 text-center pc:divide-x  ">
          <div className="m-2 pl-2 pr-2">
            <h1 className="text-4xl underline underline-offset-8 decoration-1 pb-10   ">
              Workshops
            </h1>
            <p className="text-justify">
              A hands on interactive experience with various setups from basic
              LEDs to advanced lasers,fiber drawing which will be open to all
              students.
            </p>
          </div>
          <div className="m-2 pl-2 pr-2">
            <h1 className="text-4xl underline underline-offset-8 decoration-1 pb-10   ">
              Lectures
            </h1>
            <p className="text-justify">
              Lecture series from prominent professors with live demonstrations
              of physical phenomenons.
            </p>
          </div>
          <div className="m-2 pl-2 pr-2">
            <h1 className="text-4xl underline underline-offset-8 decoration-1 pb-10   ">
              Games
            </h1>
            <p className="text-justify">
              Experience the world in yet another immersive world of virtual
              reality set in the dark rooms, Engaging quizes, working model
              competition and games will be unveiling on the day of the event
              with spot registration for students to compete for and win
              exciting prizes!
            </p>
          </div>
          <div className="m-2 pl-2 pr-2">
            <h1 className="text-4xl underline underline-offset-8 decoration-1 pb-10   ">
              Exhibition
            </h1>
            <p className="text-justify">
              Our flagship program for Etchnew'23 "The Optic Exhibition" an
              immersive and entertaining experience into the field of Optics and
              Photonics. The program would be a visual experience through
              various experiments showcasing in dark rooms. The exhibition would
              be open till the end of the event.
            </p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
