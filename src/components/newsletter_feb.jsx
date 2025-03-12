import React, { useEffect, useState, useRef, useCallback } from "react";
import Footer from "./footer";
import aristotle_and from "../images/Newsletter/aristotle_and.jpg";
import bg1 from "../images/Newsletter/bg1.jpg";
import bg2 from "../images/Newsletter/bg2.jpg";
import bg3 from "../images/Newsletter/bg3.jpg";
import bg4 from "../images/Newsletter/bg4.jpg";
import study from "../images/Newsletter/study.jpg";
import einstein from "../images/Newsletter/einstein.png";
import newton_img from "../images/Newsletter/newton_image.jpg";
import fan from "../images/Newsletter/fan.stroboscopic.jpg";
import cover from "../images/coverpage.png";
import laser from "../images/Newsletter/laser weapon.png";
import liquid from "../images/Newsletter/liquid-crystal.jpg";
import './animation.css';
import newton from "../images/Newsletter/newtonpainting.jpg";
// import Crossword from '@jaredreisinger/react-crossword';
import confetti from 'canvas-confetti';
import { useMemo } from 'react';

function NewsletterFeb() {
  const crosswordRef = useRef(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const [endTime, setEndTime] = useState(null);
  const [confettiTriggered, setConfettiTriggered] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const displayTimeRef = useRef("0m 0s");
  const [showPopup, setShowPopup] = useState(false);
  const [finishedTime, setFinishedTime] = useState("");

  // const data = useMemo(() => ({
  //   across: {
  //     2: {
  //       clue: 'As part of its ambitious space exploration endeavors, India launched its first crewed space mission, aptly named after the Sanskrit word meaning “celestial craft.” What was this historic milestone in India’s journey to the stars called?',
  //       answer: 'GAGANYAAN',
  //       row: 1,
  //       col: 0,
  //     },
  //     4: {
  //       clue: 'When scattered light waves are tamed to vibrate in a single plane – like unruly hair being combed neatly in one direction – what “P” word describes this organizing process used in sunglasses and photography filters?',
  //       answer: 'POLARIZATION',
  //       row: 6,
  //       col: 4,
  //     },
  //     5: {
  //       clue: 'When scientists study how heat propagates through solids, they describe the process in terms of quantized vibrations that transfer thermal energy. What are these tiny, heat-carrying particles called?',
  //       answer: 'PHONONS',
  //       row: 8,
  //       col: 3,
  //     },
  //     6: {
  //       clue: 'When atoms become so energetic that their electrons break free, creating an electrically charged state of matter beyond solid, liquid, and gas – what’s this fourth state that makes up stars and lightning?',
  //       answer: 'PLASMA',
  //       row: 10,
  //       col: 4,
  //     },
  //     8: {
  //       clue: 'When sunlight interacts with water droplets in the atmosphere, it creates a natural phenomenon that paints the sky in vivid hues. What geometric shape dominates the curve of this colorful arc?',
  //       answer: 'CIRCLE',
  //       row: 15,
  //       col: 4,
  //     },
  //     10: {
  //       clue: 'In the study of wave phenomena, there is a term used to describe the shift of a wave’s frequency toward the lower end of the spectrum, often observed in astronomy. What is this term?',
  //       answer: 'REDSHIFT',
  //       row: 17,
  //       col: 7,
  //     },
  //   },
  //   down: {
  //     1: {
  //       clue: 'In the world of measuring light intensity, there’s a unit named after a humble lighting source that’s been illuminating homes since ancient times and still tops birthday cakes today. What’s this fundamental unit?',
  //       answer: 'CANDELA',
  //       row: 0,
  //       col: 7,
  //     },
  //     3: {
  //       clue: 'Solar cells harness sunlight and transform it into electricity, enabled by a principle discovered through the study of light’s particle nature. What is this phenomenon called?',
  //       answer: 'PHOTOELECTRIC',
  //       row: 4,
  //       col: 5,
  //     },
  //     7: {
  //       clue: 'Shuji Nakamura, a Nobel laureate, changed the way we illuminate the world with LEDs that emit light in a short-wavelength color. What color is this innovation famously associated with?',
  //       answer: 'BLUE',
  //       row: 14,
  //       col: 8,
  //     },
  //     9: {
  //       clue: 'In spectroscopy, to measure how “wide” or spread out a spectral line is, scientists measure its entire breadth at 50 percent below its peak. What is the four-letter acronym for this measurement?',
  //       answer: 'FWHM',
  //       row: 15,
  //       col: 11,
  //     },
  //   },

  // }), []);

  // const customTheme = useMemo(() => ({
  //   gridBackground: 'rgba(33, 33, 99, 0.0)',
  //   cellBackground: 'rgba(255, 255, 255, 0.8)',
  //   cellBorder: 'rgba(86, 81, 81, 0.5)',
  //   textColor: '#000000',
  //   focusBackground: '#6366F1',
  //   highlightBackground: '#A78BFA',
  // }), []);

  const startTimer = () => {
    if (!timerStarted) {
      setTimerStarted(true);
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        displayTimeRef.current = formatTime(elapsed);
        const timeElement = document.getElementById("display-time");
        if (timeElement) timeElement.textContent = displayTimeRef.current;
      }, 1000);
    }
  };

  const handleAllCorrect = () => {
    if (!confettiTriggered) {
      const completionTime = Date.now() - startTimeRef.current;
      setEndTime(completionTime);
      setFinishedTime(formatTime(completionTime));
      setConfettiTriggered(true);
      setShowPopup(true);
      clearInterval(timerRef.current);
      confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors: ["#6366F1", "#3B82F6", "#A78BFA"] });
    }
  };

  const handleCrosswordCorrect = () => {
    if (crosswordRef.current.isCrosswordCorrect()) handleAllCorrect();
  };

  const handleCellChange = useCallback(() => {
    if (!timerStarted) startTimer();
  }, [timerStarted]);

  const formatTime = (timeInMs) => {
    const seconds = Math.floor((timeInMs / 1000) % 60);
    const minutes = Math.floor((timeInMs / 60000) % 60);
    return `${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const targetElement = document.querySelector(".drWDDE, .ksBajo");
    if (targetElement) targetElement.classList.add("custom-width");
  }, []);

  const [background, setBackground] = useState(bg1);
  const [isSidebarFixed, setSidebarFixed] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const coverRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const sidebarRef = useRef(null);
  const sectionendRef = useRef(null);
  const sidebarContainerRef = useRef(null);

  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;  
    });
  };

  useEffect(() => {
    const images = [bg1, bg2, bg3, bg4];
    preloadImages(images);
  }, []);

  const handleScroll = useCallback(() => {
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const section4 = section4Ref.current;

    if (section1 && section2 && section3 && section4) {
      const section1Top = section1.getBoundingClientRect().top;
      const section2Top = section2.getBoundingClientRect().top;
      const section3Top = section3.getBoundingClientRect().top;
      const section4Top = section4.getBoundingClientRect().top;

      const bgChange = () => {
        if (section1Top <= window.innerHeight / 2 && section1Top >= -window.innerHeight / 2) {
          setBackground(bg1);
        } else if (section2Top <= window.innerHeight / 2 && section2Top >= -window.innerHeight / 2) {
          setBackground(bg2);
        } else if (section3Top <= window.innerHeight / 2 && section3Top >= -window.innerHeight / 2) {
          setBackground(bg3);
        } else if (section4Top <= window.innerHeight / 2 && section4Top >= -window.innerHeight / 2) {
          setBackground(bg4);
        }
      };

      requestAnimationFrame(bgChange);
    }
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Cannot scroll: Ref is not attached to an element", ref);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Observer for sidebar fixed positioning
    const fixedObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSidebarFixed(false);
        } else {
          setSidebarFixed(true);
        }
      },
      { root: null, threshold: 0.1 }
    );

    // Observer for sidebar visibility
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSidebarVisible(false); // Hide sidebar when cover is visible
        } else {
          setSidebarVisible(true); // Show sidebar when cover is out of view
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (sectionendRef.current) {
      fixedObserver.observe(sectionendRef.current);
    }
    if (coverRef.current) {
      visibilityObserver.observe(coverRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionendRef.current) {
        fixedObserver.disconnect();
      }
      if (coverRef.current) {
        visibilityObserver.disconnect();
      }
    };
  }, [handleScroll]);

  return (
    <div className="bg-black font-defmono text-white w-full min-h-screen overflow-hidden relative">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 z-0 h-full w-full overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(10px)",
          opacity: "0.2",
          transition: "background-image 1s ease-in-out",
        }}
      />

      {/* Sidebar Index */}
      <div
        ref={sidebarContainerRef}
        className={`${isSidebarFixed ? "fixed top-20" : "absolute bottom-20"
          } left-4 z-30 w-[11%] mobiled-hidden tabletd-hidden bg-black/[0.5] rounded-lg  p-2 shadow-lg mt-[65px] backdrop-blur-md transition-all duration-300 ${isSidebarVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        style={isSidebarFixed ? {} : { position: "absolute", top: "auto", bottom: "480px" }}
      >

        <h3 className="text-xl font-montserrat font-bold mb-4 text-left">Sections</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => scrollToSection(coverRef)}
              className="text-white text-left text-sm hover:underline"
            >
              Cover
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section1Ref)}
              className="text-white  text-left text-sm hover:underline"
            >
              History of Optics 1
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section2Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              History of Optics 2
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section3Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              History of Optics 3
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-left text-sm hover:underline"
            >
              Crossword
            </button>
          </li>
          
        </ul>
      </div>



      <div ref={coverRef} className="mb-16 relative h-[90vh]">
        <div className="grid grid-cols-1  h-full bg-black/[.4] shadow-lg backdrop-blur-[30px] relative">
          {/* Left Half: Index (Sidebar) */}
          

          {/* Right Half: Cover Image and Title */}
          <div className="relative justify-center items-center p-6 md:p-8 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-rgba(0, 0, 0, 0.3) to-rgba(13, 13, 13, 0.4) blur-lg z-[-1]"
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(36, 36, 36, 0.2), rgba(13, 13, 13, 0.4)), url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h1 className="font-montserrat text-center mx-auto font-bold text-white z-10 pt-[5vh] md:pt-[10vh] text-3xl md:text-4xl fade-in" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}>
              ETCHES - Issue 1
            </h1>
            <p className="text-sm text-center text-gray-300 mt-4 z-10 fade-in"> ETCHES Newsletter</p>

            <div className="p-6 md:p-4 justify-center items-center md:items-start">
              <div className="w-full max-w-[100%] md:max-w-[40vw] justify-self-center rounded-lg bg-black/[0.5] p-2 md:p-4 mt-[10vh] mobiled:mt-[2vh] font-montserrat text-center shadow-md border border-gray-700 backdrop-blur-md transition-all duration-300 fade-in">
                <h3 className="text-xl font-bold mb-4 mx-auto text-center">Sections</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => scrollToSection(coverRef)}
                        className="text-white text-base hover:underline"
                      >
                        Cover
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section1Ref)}
                        className="text-white text-base hover:underline"
                      >
                        History of Optics 1
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section2Ref)}
                        className="text-white text-base hover:underline"
                      >
                        History of Optics 2
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section3Ref)}
                        className="text-white text-base hover:underline"
                      >
                        History of Optics 3
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    </ul>
                  {/* Second column for items beyond 10 */}
                    <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Crossword
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







      {/* Newsletter Section */}
      <div className="relative z-10 flex justify-center items-center py-12">
        <div className="w-full max-w-4xl pcd:max-w-[75%] px-2">
          {/* Section 1 */}
          <div ref={section1Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
                HISTORY OF OPTICS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={aristotle_and}
                      alt="Aristotle"
                      className="w-full h-[500px] md:h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  One of the first questions the ancient Greeks asked was how we were able to see things around us. One group led by Pythogoras and Empedocles believed that vision was akin to touch, with the eyes emitting an invisible “visual fire” to probe surfaces and were quick to ridicule anyone that did not align with their beliefs. Alcmaeon, a student of Pythagoras, even suggested proving the existence of this fire by striking a skeptic’s eye, claiming the resulting blackout was the fire being extinguished.
                  <br />
                  Another group, led by Democritus, believed that vision resulted from the impact of atoms traveling from an object to the eye. According to them, objects constantly emitted their outlines in the form of extremely thin films—far thinner than anything known to us. However, they argued that objects did not shrink over time because the emitted particles were continuously replaced by others from the surrounding air.
                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  It’s safe to assume that disagreements between these two groups often led to sparring and disputes (Each group had it’s own school of thought). Tired of the endless fights, Empedocles and Democritus proposed a  compromise theory: vision occurred when the material efflux (floating atoms) and visual fire met between the object and the eye. Now, you might imagine that this may satisfy both groups' egos and bring an answer to this debate, but what’s a good story without betrayal. This story’s betrayal comes in the form of Democritus’ own students, Epicurus and Lucretius, who completely eliminated the visual fire and only imagined thin layers of atoms travelling all the way from the object to the eye, thus bringing the debate back to the table.
                  <br />
During one of these debates, a question that arose was: if atoms alone caused sensation, why could we only see with a light source? To this, Lucretius responded that the luminaries (sun) continuously emitted subtler atoms of light, which enlarged the pores in the air, allowing the effigies of objects to reach the eyes. One might think this would put a full stop to the endless debates that occurred. But no, because of this statement, the atomists had to acknowledge two entities required to see the objects in front of us- the light from the sun and the material effigies. After years of trying to establish that theirs was the better theory and refusing the compromise theory, the atomists were forced to adopt some of the Pythagoras theory and thus begrudgingly compromising. 

                
                  </p>
                  <div className="relative overflow-hidden ">
                    <img
                      src={einstein}
                      alt="Einstein"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div ref={section2Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              THE GLOBAL LASER WEAPON PROGRAM

              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={laser}
                      alt="laser"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong></strong>
                    <br />
                    Imagine a powerful laser weapon, much like those seen in sci-fi movies, used in spaceships, war camps, and planetary battles, where aliens destroy enemy aircraft with precision - laser weapons are becoming a reality. Many countries are actively developing laser technology to enhance their military systems, marking a new era in defense and security and paving the way for a new chapter in global safety.A laser weapon is a type of directed-energy weapon that uses a high-powered laser beam to damage or destroy targets with precision and speed.
                    Several countries are actively developing and deploying laser weapon systems for military  Peresvet laser system. Several countries are actively developing and deploying laser weapon systems for military  Peresvet laser system. The United States, a pioneer in laser technology, has programs like the Laser Weapon System (LaWS) and the High Energy Laser (HEL) MD, with the US Navy successfully demonstrating LaWS’ capabilities in destroying drones and small boats.

                  </p>
                </div>
                    
                 {/* second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  The United States, a pioneer in laser technology, has programs like the Laser Weapon System (LaWS) and the High Energy Laser (HEL) MD, with the US Navy successfully demonstrating LaWS’ capabilities in destroying drones and small boats.  China has also made significant advancements, showcasing its laser weapon system’s ability to destroy drones and other aerial targets at military exhibitions. Russia has developed laser weapon systems, including the laser system, designed to blind satellites and other aerial targets, and the sokol echelon laser system. Israel’s Iron Beam laser defense system is designed to intercept short-range rockets, artillery shells, and drones, with successful tests already conducted. Germany and France are collaborating on a high-energy laser weapon system for defense against drones and other aerial targets. India almost developed the laser weapon program, including a Tactical High Energy Laser System and a laser-based anti-drone system. These countries are driving innovation in laser technology, pushing the boundaries of what is possible in military applications.The development and deployment of laser weapons by various countries marks a significant milestone in modern warfare, offering unparalleled precision, speed, and cost-effectiveness. As this technology continues to evolve, its potential applications will expand, transforming the landscape of military operations and defense strategies worldwide.


                  </p>
                </div>
              </div>
            </div>
          </div>
          

          {/* Section 3 */}
          <div ref={section3Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              A HAUNTING ENCOUNTER AT HOME
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={fan}
                      alt="fan"
                      className="w-full h-[500px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  In the quiet suburb of Willow Creek stood an old Victorian house. Mia and her grandmother
                  had recently moved in, unaware of the strange events ahead.
                  One evening, Mia tested the old ceiling fan in the living room. She pulled the brass chain,
                  and the fan spun with a steady hum. As it gained speed, the chandelier lights flickered,
                  creating a strange effect. This flicker synchronized with the fan's rotation. To Mia’s surprise,
                  the blades seemed to slow, stop, then reverse direction—an optical illusion known as the
                  wagon-wheel effect. Curious and uneasy, Mia called her grandmother.The next day, an electrician found faulty wiring causing the irregular flicker, leading to the
                  stroboscopic effect. Though the problem was fixed, Mia couldn’t shake the feeling that what
                  they saw was more than a trick of the light.
                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Later, Mia recounted the events to her friends
                  at school.They listened intently, fascinated by her eerie tale. Leo, who loved science,
                  immediately recognized the phenomenon. “That’s the stroboscopic effect! It happens when
                  flickering light interacts with a spinning object.”  
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Determined to learn more, Mia, Leo, and their friend Sarah started to research and
                  discovered it’s use in film production, machinery, and medical diagnostics. Inspired, they
                  decided to build their own stroboscope. They began with a cardboard disc, cutting evenly
                  spaced slits around its edge to allow periodic glimpses of the spinning object. To ensure
                  precise rotation, they attached the disc to a small motor, which allowed them to control its
                  speed. They then added an LED light to a basic circuit with a variable resistor, allowing them
                  to modify the flickering rate of the LED to match the rotation of the object they were
                  observing.
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Once assembled, they tested their creation. As they fine-tuned the flashing rate, they
                  observed the same stroboscopic effect that Mia had described—the spinning object
                  appeared to slow down, freeze, or even reverse direction. “Now this,” Mia said, watching their homemade stroboscope in action, “is way cooler than
                  just being scared in my living room.Leo grinned. “And now we know exactly why it happened.”
                  What began as a spooky encounter turned into a fascinating experiment. She felt reassured
                  knowing that science had an explanation—at least for part of it. The house might still have
                  its secrets, but Mia and her friends had uncovered one of them through curiosity and
                  discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div ref={section4Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              LIQUID CRYSTAL LENS FILTERS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={liquid}
                      alt="liquid"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong></strong>
                    <br />
                   Photosensitive Epilepsy is the seizure caused by the flashing or contrasting light and dark patterns. The disease is quite rare and is detected when an EEG is taken. It’s alarming that even video games displayed at certain wavelength elevates the chances of photosensitive epilepsy. These lights cause discomfort to those without epilepsy as well. The researchers of the University of Glasgow and the University of Birmingham are working in collaboration to uncover the solutions to evade this disease. They have currently come up with “Liquid Crystal Lens Filters.” The lenses of this device are made from cholesteric liquid crystal (CLC) that’s sensitive to variance in temperature and electric field that blocks the entry of certain harmful wavelengths that are likely to induce seizures. CLC lenses vigorously change their stopband in response to small changes in temperature. An electronic system is built into the lens for controlling the temperature in real time.The lens operates like a conventional glass with its stopband falling outside the visible spectrum at normal temperatures.
                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-8
                ">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  When the temperature reaches 36.5 degree Celsius the lens blocks the light within the range that induce photosensitive epilepsy. To attain the maximum cutoff of target wavelength in the stopband the researchers used the CLC materials with opposite handedness. A dual-layered configuration was adopted where both left and right-handed layers were cascaded to block 98% of light in wavelength range 660nm-720nm (The critical range causing photosensitive epilepsy).

                  <h2 

                  className="text-1xl font-bold font-montserrat text-center text-white mb-8">
                     <h2 className="text-xl font-bold font-montserrat text-center text-white mb-8">
                     <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong></strong>
                    <br />
                    WHY CLC’S ARE BETTER THAN TRADITIONAL METHODS?
                  </p>
                      
         
                     </h2>
                  
                </h2>
                <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify"></p>
                Traditional methods like colored glasses are nearly impractical as its optical properties are fixed and the scenarios triggering photosensitive epilepsy are limited. In contrast the CLC lenses can adapt to different environments and function accordingly. The lenses exhibits amazing optical tunability and are able to vary reflection band by modulating the temperature. They provide good transmittance within the visible spectrum while maintaining same appearance as normal lenses. However if temperature exceeds 26 degree Celsius, it could negatively affect the patient’s health. To tackle this, chiral dopants with high helical twisting power is inserted to enhance the thermal sensitivity of CLC materials. The heating-cooling effects can be controlled by refining the lens structure or integrated advanced electrodes with thermal sensitivity to accelerate temperature change, allowing larger stopband shifts with minimum temperature change.

                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div ref={section4Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              MARCH 14: DAY THE GENIUS WAS BORN
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={liquid}
                      alt="liquid"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong></strong>
                    <br />
                    Albert Einstein, regarded as one of the greatest physicists of all time, who revolutionized Physics was born on March 14, 1879, in Ulm, Germany. He grew up in Munich and later moved to Switzerland, where he studied at the Swiss Federal Polytechnic in Zurich. He worked at the Institute for Advanced Study in Princeton and remained there until his passing on April 18, 1955.
                    <br/>
                    In his 1905 paper, on the photoelectric effect and the nature of light, he proposed that light is composed of discrete energy packets called photons—a revolutionary concept that played a crucial role in the development of quantum mechanics and earned him the 1921 Nobel Prize in Physics.Einstein also refined the concept of wave-particle duality, showing that light exhibits both wave-like and particle-like behavior. His work on stimulated emission laid the theoretical foundation for the development of lasers, which have become crucial in modern optics, telecommunications, and medical applications.

                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-8
                ">
                <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  
                 His general theory of relativity (1915) predicted gravitational lensing—the bending of light by massive objects—which has been confirmed through astronomical observations and is essential in modern astrophysics.
                 <br/>
                 His insights into the interaction between light and matter transformed optical physics, influencing fields such as spectroscopy, quantum optics, and photonics. Today, Einstein’s contributions continue to shape advancements in optical technology, from laser systems to quantum computing, making him a pivotal figure in the evolution of modern optics.
                 
                </p>
                      
         
                   

                  
                </div>
              </div>
            </div>
          </div>
  

          {/* Section 4 */}
          <div ref={section4Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              DID YOU KNOW?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={liquid}
                      alt="liquid"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong></strong>
                    <br />
                    Did you know that modern endoscopy traces its roots to the 4000-year-old Indian practice of sword swallowing?

                  
                    
                    <br/>
                    The invention of the modern endoscope is often credited to Philipp Bozzini (1773–1809), a German physician who developed the first practical endoscope. However, the concept of using a tubular instrument for internal examination dates back to ancient Indian medical practices.
                    <br/>
                    In ancient India, priests practiced sword swallowing as a demonstration of intense physical and mental control. This skill later gained popularity in Europe as a circus spectacle, eventually capturing the attention of Dr Adolf Kussmaul, who sought a way to view the inside of the human body without surgery. Inspired by sword swallowing, he developed a 47 cm long tube equipped with lights and mirrors, successfully performing the first esophagoscopy—paving the way for modern endoscopy.


                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-8
                ">
                <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                 The contributions of ancient Indian medicine to endoscopy don’t end there. Sushruta (800–700 BC), the pioneering Indian surgeon, described an early form of endoscopy known as Nadiyantra. 
                 
                 <br/>
                 While Bozzini’s first endoscope (1806) was rejected by the College of Physicians in Vienna, French physician Antonin Jean Desormeaux (1853) improved upon the design, becoming the first to use an endoscope in surgery. Later, in 1894/95, John Macintyre at Glasgow Royal Infirmary—one of the first hospitals with mains electricity—developed the first self-illuminated endoscope, a major breakthrough in medical imaging.

                 
                </p>
                      
         
                   

                  
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div ref={section4Ref} className="mb-16">
            <div className=" p-4  shadow-lg backdrop-blur-[30px]">
              <div className="bg-black/[.4] justify-self-center justify-content-center  shadow-lg w-[90%] max-w-[600px]">
                <h2>Timer: <span id="display-time">{displayTimeRef.current}</span></h2>
                {showPopup && (
                  <div className="fixed inset-0 bg-black/50 flex items-top justify-center z-50 pt-[20vh]">
                    <div className="bg-black/[.5]  shadow-lg text-center max-h-[150px] max-w-[400px]">
                      <h2 className="text-xl font-semibold mb-4">Congratulations!</h2>
                      <p>You completed the crossword in <strong>{finishedTime}</strong>.</p>
                      <button
                        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => setShowPopup(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                {/*<div className="crossword-wrapper">
                  <Crossword
                    ref={crosswordRef}
                    data={data}
                    // theme={customTheme}
                    onCrosswordCorrect={handleCrosswordCorrect}
                    onCellChange={handleCellChange}
                  />
                </div>*/}
                <button
                  className="mt-4 bg-red-500 text-white py-2 px-4 justify-self-center mx-auto rounded relative hover:bg-red-600"
                  onClick={() => crosswordRef.current?.reset()}
                >
                  Clear Answers
                </button>
              </div>
            </div>
          </div>

          {/* Section End Marker */}
          <div ref={sectionendRef}></div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

        
export default NewsletterFeb;
