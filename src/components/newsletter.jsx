import React, { useState, useEffect } from "react";
import Footer from "./footer";
import { Link, useLocation } from "react-router-dom";
import cover from "../images/coverpage.png";
import herovid from "../videos/dot-waves.mp4";
import "./animation.css";

function Newsletter() {
  const [isJanVisible, setIsJanVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("access") === "jan") {
      setIsJanVisible(true);
    }
  }, [location.search]);

  
  // const StackedCards = () => {
  //   const [awayCards, setAwayCards] = useState([]);
  //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
  //   const [isStackFixed, setIsStackFixed] = useState(true);
  //   const [isHovering, setIsHovering] = useState(false);  // React state for hover tracking
  
  //   useEffect(() => {
  //     const handleScroll = (event) => {
  //       if (!isHovering) return;
  
  //       event.preventDefault(); // Prevent default scrolling behavior
  //       const cards = document.querySelectorAll(".card");
  
  //       if (currentCardIndex < cards.length) {
  //         setAwayCards((prev) => [...prev, currentCardIndex]);
  //         setCurrentCardIndex((prev) => prev + 1);
  //       } else {
  //         document.body.style.overflow = "auto"; // Allow normal scrolling after all cards are flicked
  //         setIsStackFixed(false);
  //       }
  //     };
  
  //     window.addEventListener("wheel", handleScroll, { passive: false });
  
  //     return () => {
  //       window.removeEventListener("wheel", handleScroll);
  //     };
  //   }, [currentCardIndex, isHovering]);
  
  //   return (
  //     <div
  //       className={`stack-area ${isStackFixed ? "fixed" : "relative"} bg-black/[.4] flex justify-center items-center w-full py-20`}
  //       style={{ height: isStackFixed ? "100vh" : "auto" }}
  //       onMouseEnter={() => {
  //         document.body.style.overflow = "hidden";  // Disable body scroll
  //         setIsHovering(true);
  //       }}
  //       onMouseLeave={() => {
  //         document.body.style.overflow = "auto";   // Enable body scroll
  //         setIsHovering(false);
  //       }}
  //     >
  //       <div className="right relative">
  //         {["Simplified", "Boost Productivity", "Facilitated Learning", "Support"].map(
  //           (sub, index) => {
  //             const isAway = awayCards.includes(index);
  //             return (
  //               <div
  //                 key={index}
  //                 className={`card ${isAway ? "away" : ""}`}
  //                 style={{
  //                   transform: isAway
  //                     ? `translateY(-120vh) rotate(-48deg)`
  //                     : `rotate(${index * -10}deg)`,
  //                   zIndex: 4 - index,
  //                   transition: "transform 1s ease",
  //                 }}
  //               >
  //                 <div className="sub">{sub}</div>
  //                 <div className="content">
  //                   {index === 0
  //                     ? "Complex tasks are now simple"
  //                     : index === 1
  //                     ? "Perform tasks in less time"
  //                     : index === 2
  //                     ? "Train anyone from anywhere"
  //                     : "Now it's 24/7 support"}
  //                 </div>
  //               </div>
  //             );
  //           }
  //         )}
  //       </div>
  //     </div>
  //   );
  // };
  

  return (
    <div className="bg-black justify-items-center font-defmono text-white grid items-center w-full overflow-x-clip">
      {/* Background Video */}
      <div
        className="fixed inset-0 z-0 h-full w-full overflow-hidden"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <video
          src={herovid}
          height="1080"
          width="1920"
          className="video -z-1"
          loop
          autoPlay
          muted
          type="video/mp4"
        />
      </div>

      <div className="w-full h-auto justify-items-center">
        <div className="w-full justify-items-center mobile:h-auto pc:h-auto p-8 text-center text-2xl">
          {!isJanVisible && (
            <div>
              <h1 className="text-center justify-self-center relative text-5xl tablet:text-8xl pt-20 underline decoration-1 tablet:underline-offset-[12px] underline-offset-8 pb-8">
                NEWSLETTER
              </h1>
              <p className="w-full relative">
                Explore the history and real-world impact of photonics and optics.
                Stay updated on the latest advancements, try hands-on experiments,
                and enjoy exclusive interviews with experts. Participate in fun
                activities like crosswords, puzzles, and quizzes to win prizes.
              </p>
              <Link
                to="/newsletter_registration"
                className="pl-2 hover:translate-y-2 relative transition duration-300 ease-in-out hover:text-red-600 hover:underline"
              >
                <div className="inline-block rounded-lg mt-10 w-72 bg-opacity-60 hover:bg-opacity-100 cursor-pointer bg-gray-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gray-600 hover:bg-gray-700 hover:ring-gray-700">
                  Register
                </div>
              </Link>
            </div>
          )}

          {isJanVisible && (
            <div>
              <div className="pt-1 pc:pt-24 w-full h-fit pc:mb-48 items-center font-defmono justify-items-center">
                <h1 className="text-center text-5xl tablet:text-8xl underline decoration-1 tablet:underline-offset-[12px] underline-offset-8 pb-8">
                  NEWSLETTER ARCHIVE
                </h1>

                {/* Scrollable Section */}
                <div className="pc:w-[80%] relative w-full h-auto pb-4 flex flex-col space-y-6">
                  {/* Tile 1 */}
                  <div className="flex flex-col tablet:flex-row bg-gray-900/40 rounded-lg shadow-lg h-auto p-4 tablet:p-6">
                    <div className="w-full tablet:w-[35%] h-[300px]">
                      <img
                        className="h-[300px] w-auto object-cover mx-auto rounded-md"
                        src={cover}
                        alt="January Newsletter"
                      />
                    </div>
                    <div className="w-full tablet:w-[60%] flex flex-col justify-center">
                      <h2 className="text-2xl font-bold">January Edition</h2>
                      <p className="mt-2 text-base">
                        Welcome to the January edition! Discover the latest news,
                        updates, and events that made headlines in the month.
                      </p>
                      <Link to="/newsletter_jan" className="mt-4 text-blue-400 hover:underline">
                        Read More →
                      </Link>
                    </div>
                  </div>
                  
                  
                  <div className="flex flex-col tablet:flex-row bg-gray-900/40 rounded-lg shadow-lg h-auto p-4 tablet:p-6">
                    <div className="w-full tablet:w-[35%] h-[300px]">
                      <img
                        className="h-[300px] w-auto object-cover mx-auto rounded-md"
                        src={cover}
                        alt="January Newsletter"
                      />
                    </div>
                    <div className="w-full tablet:w-[60%] flex flex-col justify-center">
                      <h2 className="text-2xl font-bold">February Edition</h2>
                      <p className="mt-2 text-base">
                        Welcome to the February edition! Discover the latest news,
                        updates, and events that made headlines in the month.
                      </p>
                      <Link to="/newsletter_feb" className="mt-4 text-blue-400 hover:underline">
                        Read More →
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stacked Cards Animation */}
      {/* <StackedCards /> */}

      <Footer />
    </div>
  );
}

export default Newsletter;
