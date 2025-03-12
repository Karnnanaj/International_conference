import React from "react";

function Footer() {
  return (
    <div className=" border-t-2 bg-black/[.4] border-white h-fit w-full grid  snap justify-items-center relative ">
      <h1 className="text-center pt-2 text-3xl pc:text-4xl ">
        CONTACT US!
      </h1>
      <div className="grid grid-flow-row pc:grid-flow-col justify-around text-white relative  ">
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

      <p className="justify-self-center text-2xl pc:text-2xl text-center border-t-2 font-defmono border-white pt-2  w-full">
        Copyright <span className="text-red-600">ETCHNEW</span> 2025 &#169;
      </p>
    </div>
  );
}
export default Footer;