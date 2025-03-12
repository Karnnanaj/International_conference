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
import hazard from "../images/Newsletter/laserhazard.jpg";
import tajmahal from "../images/Newsletter/tajmahal.jpg";
import cover from "../images/coverpage.png";
import berries from "../images/Newsletter/berries.png";
import willow from "../images/Newsletter/willow.jpg";
import blue_sky from "../images/Newsletter/sky.jpg";
import './animation.css';
import newton from "../images/Newsletter/newtonpainting.jpg";
import Crossword from '@jaredreisinger/react-crossword';
import confetti from 'canvas-confetti';
import { useMemo } from 'react';

function NewsletterJan() {
  const crosswordRef = useRef(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const [endTime, setEndTime] = useState(null);
  const [confettiTriggered, setConfettiTriggered] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const displayTimeRef = useRef("0m 0s");
  const [showPopup, setShowPopup] = useState(false);
  const [finishedTime, setFinishedTime] = useState("");

  const data = useMemo(() => ({
    across: {
      2: {
        clue: 'As part of its ambitious space exploration endeavors, India launched its first crewed space mission, aptly named after the Sanskrit word meaning “celestial craft.” What was this historic milestone in India’s journey to the stars called?',
        answer: 'GAGANYAAN',
        row: 1,
        col: 0,
      },
      4: {
        clue: 'When scattered light waves are tamed to vibrate in a single plane – like unruly hair being combed neatly in one direction – what “P” word describes this organizing process used in sunglasses and photography filters?',
        answer: 'POLARIZATION',
        row: 6,
        col: 4,
      },
      5: {
        clue: 'When scientists study how heat propagates through solids, they describe the process in terms of quantized vibrations that transfer thermal energy. What are these tiny, heat-carrying particles called?',
        answer: 'PHONONS',
        row: 8,
        col: 3,
      },
      6: {
        clue: 'When atoms become so energetic that their electrons break free, creating an electrically charged state of matter beyond solid, liquid, and gas – what’s this fourth state that makes up stars and lightning?',
        answer: 'PLASMA',
        row: 10,
        col: 4,
      },
      8: {
        clue: 'When sunlight interacts with water droplets in the atmosphere, it creates a natural phenomenon that paints the sky in vivid hues. What geometric shape dominates the curve of this colorful arc?',
        answer: 'CIRCLE',
        row: 15,
        col: 4,
      },
      10: {
        clue: 'In the study of wave phenomena, there is a term used to describe the shift of a wave’s frequency toward the lower end of the spectrum, often observed in astronomy. What is this term?',
        answer: 'REDSHIFT',
        row: 17,
        col: 7,
      },
    },
    down: {
      1: {
        clue: 'In the world of measuring light intensity, there’s a unit named after a humble lighting source that’s been illuminating homes since ancient times and still tops birthday cakes today. What’s this fundamental unit?',
        answer: 'CANDELA',
        row: 0,
        col: 7,
      },
      3: {
        clue: 'Solar cells harness sunlight and transform it into electricity, enabled by a principle discovered through the study of light’s particle nature. What is this phenomenon called?',
        answer: 'PHOTOELECTRIC',
        row: 4,
        col: 5,
      },
      7: {
        clue: 'Shuji Nakamura, a Nobel laureate, changed the way we illuminate the world with LEDs that emit light in a short-wavelength color. What color is this innovation famously associated with?',
        answer: 'BLUE',
        row: 14,
        col: 8,
      },
      9: {
        clue: 'In spectroscopy, to measure how “wide” or spread out a spectral line is, scientists measure its entire breadth at 50 percent below its peak. What is the four-letter acronym for this measurement?',
        answer: 'FWHM',
        row: 15,
        col: 11,
      },
    },

  }), []);

  const customTheme = useMemo(() => ({
    gridBackground: 'rgba(33, 33, 99, 0.0)',
    cellBackground: 'rgba(255, 255, 255, 0.8)',
    cellBorder: 'rgba(86, 81, 81, 0.5)',
    textColor: '#000000',
    focusBackground: 'rgba(79, 117, 221, 0.8)',
    highlightBackground: 'rgba(159, 152, 230, 0.8)',
  }), []);

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
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);
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
        style={isSidebarFixed ? {} : { position: "absolute", top: "auto", bottom: "80vh" }}
      >

        <h3 className="text-xl font-montserrat font-bold mb-4 text-left">Sections</h3>
        <ul className="space-y-2">
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
              History of Optics
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section2Ref)}
              className="text-white text-base hover:underline"
            >
              Issac Newton
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section3Ref)}
              className="text-white text-base hover:underline"
            >
              Current Trends
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section4Ref)}
              className="text-white text-base hover:underline"
            >
              Clothes of Sky
            </button>
          </li>
          
          <li>
            <button
              onClick={() => scrollToSection(section5Ref)}
              className="text-white text-base hover:underline"
            >
              Did you know?
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section6Ref)}
              className="text-white text-base hover:underline"
            >
              Laser Hazards
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section7Ref)}
              className="text-white text-base hover:underline"
            >
              Built to Last
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section8Ref)}
              className="text-white text-base hover:underline"
            >
              The Invisible
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(section9Ref)}
              className="text-white text-base hover:underline"
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
                        History of Optics
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section2Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Issac Newton
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section3Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Current Trends
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section4Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Clothes of Sky
                      </button>
                    </li>
                    
                    </ul>
                  {/* Second column for items beyond 10 */}
                    <ul className="space-y-1">
                    <li>
                      <button
                        onClick={() => scrollToSection(section5Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Did you know?
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section6Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Laser Hazards
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section7Ref)}
                        className="text-white text-base hover:underline"
                      >
                        Built to Last
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section8Ref)}
                        className="text-white text-base hover:underline"
                      >
                        The Invisible
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection(section9Ref)}
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
                    <strong>Romanticized Eureka Moments to Medieval Cautionary Tales</strong>
                    <br />
                    Modern science stories are like comforting bedtime tales—Newton's apple falling dramatically, Einstein 
                    scribbling equations in a moment of genius. Even though these stories are all far from the truth
                    they are soothing to hear and make the pursuit of science very appealing. 
                    But dig a little deeper into ancient scientific lore, and you'll find stories that are less "inspiring breakthrough", 
                    more "medieval cautionary nightmare."

                    </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>The Wild Tale of Aristotle and Phyllis: A Soap Opera Plot</strong>
                    <br />
                    Take the wild tale of Aristotle and Phyllis—a story so bonkers it sounds like a soap opera plot rather than a philosophical anecdote. 
                    In this medieval woodcut-worthy narrative, Phyllis supposedly humiliates Aristotle by literally leading him around on a leash while he's in animal-like 
                    submission. The story goes that when Aristotle warned his student Alexander the Great about getting too distracted by his lover 
                    Phyllis, she hatched a revenge plan. She seduced the great philosopher, proving that even brilliant minds can be led astray—literally 
                    and figuratively.
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>Intellectual Curiosity? Beware the Medieval Propaganda!</strong>
                    <br />
                    But here's the kicker: This story isn't some quirky historical footnote. It was deliberately crafted by a medieval cleric named Jacques
                     de Vitry as a warning against intellectual pursuit. Think about that—instead of celebrating scientific curiosity, they were manufacturing
                      stories designed to discourage people from thinking too deeply.
                  </p>
                  <div className="relative overflow-hidden ">
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 border-t border-gray-500 w-full my-4"></div>
                
                <div className="flex flex-col gap-4">
                  <img
                      src={einstein}
                      alt="Einstein"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>Modern Myths vs. Medieval Morals -
                      The Bedtime Tale Aristotle Deserved</strong>
                    <br />
                    This is especially sad when we consider how easy it would have been to confer Aristotle's theories
                     with a deliciously dramatic backstory. For instance, let us consider how Aristotle rebutted Plato’s
                      theory of vision. Plato believed that we see objects when an invisible fire emitted by the eye touches
                       the objects around us. Aristotle argued against this belief by observing that one can see small versions
                        of the objects around us in another individual's eyes. One could have easily fabricated a story where
                         Aristotle's inspiration for this rebuttal came in a moment of intimacy wherein he stared into his lover's eyes. 
                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
                    
                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  
                    It seems only fair that the Ancient Greeks and Romans have such comforting bedtime tales written about their
                    discoveries; this column will attempt to do the same. We shall tell the story of how ancient Wisdom came to 
                    be in a setting not so different from a typical high school drama so that critical thought is reduced from a 
                    Himalayan monstrosity to a sweet bedtime tale.
                  </p>
                  <img
                      src={newton}
                      alt="Einstein"
                      className="w-full h-[400px] object-cover  shadow-md"
                    />
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
              </div>
            </div>
          </div>



          <div ref={section2Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
                CELEBRATING ISAAC NEWTON
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={newton_img}
                      alt="Isaac Newton"
                      className="w-full h-[500px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    On January 4, 1643, Sir Isaac Newton was born prematurely in Lincolnshire, England, weighing a mere 500 grams. His early life was marked by adversity, as his father had passed away just months before his birth. Under the care of his grandparents, Newton grew to become one of the greatest minds in history, shaping the trajectory of modern science. 
                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Among his many achievements are the laws of motion, the law of universal gravitation, and the invention of calculus. In the field of optics, Newton was the first to demonstrate the dispersion of white light into its constituent colours using a prism. His groundbreaking experiments revealed the fundamental nature of light and laid the foundation for modern optics—an essential cornerstone of photonics. Today, his insights continue to influence cutting-edge advancements, from laser technologies to fiber optics.
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    In his relentless pursuit of understanding, Newton once conducted a daring and painful experiment by inserting a needle-like instrument, known as a bodkin, between his eye and the bone to study vision and colour perception. While extreme, this bold curiosity exemplifies his commitment to uncovering nature's secrets.
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    Newton’s brilliance was so universally acknowledged that it inspired stories of admiration from his peers. When Johann Bernoulli issued a challenging mathematical problem, Newton anonymously submitted a solution. Upon seeing it, Bernoulli is said to have remarked, “I recognize the lion by his claws.”
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    As we honour Newton’s legacy, let’s celebrate how his work still illuminates our understanding of light and inspires innovation in photonics.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div ref={section3Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              CURRENT TRENDS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={willow}
                      alt="Aristotle"
                      className="w-full h-[500px] md:h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>MEET WILLOW, GOOGLE'S GROUNDBREAKING QUANTUM CHIP</strong>
                    <br />
                    Imagine a computer so powerful that it can solve problems that would take today’s fastest supercomputers septillions of years to complete. Sounds like science fiction, right? Well, thanks to developments in quantum computing, it's becoming a reality! One of the latest advancements in this field is Google’s willow quantum chip, which promises to take computing to the next level.
        
                    <br/><br/>
                    
                    </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    So, what is a Quantum Computer?
                    In a regular computer, information is stored and processed using bits, which are like tiny switches that can either be on (1) or off (0).
                    <br/><br/>
                    But quantum computers use qubits, which can be a superposition of both 1 and 0 at the same time. This allows them to perform many calculations all at once, making them incredibly powerful even to analyze every possible answer to a math problem in a split second.
                    <br/><br/>
                    Google has advanced its quantum computing journey with processors like Foxtail (2017), Bristlecone (2018), Sycamore (2019), and Willow (2024). Google's Sycamore processor in 2019 demonstrated what we now call “quantum supremacy” by solving the random circuit sampling(RCS) task, a benchmark test, in 200 seconds. Google estimated this task would take the world’s fastest classical supercomputer at that time, approximately 10,000 years. 
                  </p>
                </div>

                <div className="col-span-1 md:col-span-2 border-t border-gray-500 w-full my-4"></div>


                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Quantum supremacy is a reality but the highly sensitive nature of qubits introduces errors that pose a significant challenge in its calculation. Information in quantum computers is stored in the pattern of amplitudes and phases across the quantum superposition state. By errors in quantum computers, we mean the loss of this information due to the breakdown of the superposition state and it often stems from a variety of factors mainly low quantum coherence time(the length of time qubits maintain their intended state). Willow is developed to tackle this very problem. Its coherence time is significantly enhanced to nearly 100 microseconds — approximately a fivefold improvement over Sycamore.
                  <br/><br/>
                  To achieve this, the information is spread across different qubits which are interconnected in a mesh-like manner. Even if some qubits misbehave the information is not lost thereby suppressing the physical error rates. By reducing the physical error rates below the fault-tolerance threshold, it was observed that the error rate decreased exponentially as more qubits were added.
                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
                    
                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    This was a breakthrough discovery as error-free calculations are only a few qubits away. With 105 tunable qubits and distance-7 surface codes(tells how long the qubits are spread out), Willow became the first quantum computer to achieve quantum error correction below the surface code threshold.
                  </p>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  <strong>And its Significance?</strong> <br/>

                  With Willow, we can solve complex problems with minimal errors, pushing us closer to realizing quantum utility. These results didn’t come out without any setbacks. The research team discovered a new type of error that occurs once every hour- “ an hourly error”. The exact cause of this error is still an unsolved quantum mystery!
                    

                  What’s Next for Students Like You? 
                  Quantum computing might sound complicated, but it’s a growing field with many opportunities for young minds. “Quantum Computing for Everyone” by Chris Bernhardt is a great book to start your journey. It is a beginner-friendly book that explains the concepts in an easy-to-understand manner making it a perfect gateway to explore the fascinating world of quantum science.
                  </p>
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
              


              </div>
            </div>
          </div>



          
          {/* Section 1 */}
          <div ref={section4Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
                CLOTHES OF SKY
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={blue_sky}
                      alt="Aristotle"
                      className="w-full h-[500px] md:h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    Little Mia loved spending her afternoons with her grandmother, who always had magical Answers to her endless questions. One golden evening, as they sat together watching the sunset, Mia’s curious voice broke the silence. “Grandma, why is the sky blue? And why does it turn red And orange in the evening?”
                    <br/><br/>
                    “During the day,” her grandmother answered, “the sky appears blue because of something called Rayleigh scattering. Tiny air molecules scatter blue light in all directions more than other colors, creating a brilliant blue canvas above us. But at sunset, sunlight has to travel a longer path through the atmosphere. By the time it reaches us, most of the blue light has been scattered away, leaving warm colors like red and orange to paint the sky.”
                    </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    Grandma also explained how rainbows form. “When sunlight passes through water droplets in the atmosphere, the droplets bend and split the light into seven beautiful colors. The same thing happens when light passes through a crystal or prism, revealing its hidden beauty. It’s like a secret code hidden in sunlight, revealed only when the conditions are just right. 
                  <br/><br/>
                  Inspired by the story , Mia and her grandmother decided to create an artificial sunset. Grandma filled a container with water, added drops of milk, and shone a flashlight through it. When Mia looked, she saw blue light from the side and warm yellow-red hues from the end.
                  <br/><br/>
                  “Why does it work like that?” Mia asked, wide-eyed. Her grandmother smiled and said, “The milk scatters light in a way that’s similar to our atmosphere. The blue light scatters easily, while the red and orange hues pass through, just like in a real sunset.” Mia giggled, “The sky changes Outfits—blue in the day, red at sunset!” Her grandmother laughed. “And when there’s a rainbow, It’s showing off all its clothes at once.” 
                  <br/><br/>
                  From then on, every sunset reminded Mia of the magic her grandmother had shared and the endless beauty hidden in the simplest things.
                  </p>
                  <div className="relative overflow-hidden ">
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>


          
          {/* Section 1 */}
          <div ref={section5Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
                DID YOU KNOW?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={tajmahal}
                      alt="Aristotle"
                      className="w-full h-[500px] md:h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>Romanticized Eureka Moments to Medieval Cautionary Tales</strong>
                    <br />
                    The monument is primarily made of white marble, which reflects light in various ways depending on the angle of the sun and the atmospheric conditions.

                    <br/><br/>Morning: The Taj appears pale with a delicate pinkish hue when the sun rises.
                    <br/><br/>Afternoon: The white marble reflects bright sunlight, making the structure seem pure, gleaming white.
                    
                    
                    
                    </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <br/><br/>Evening: As the sun sets, the Taj takes on a golden or honeyed tone, creating a more serene and warm appearance.
                    <br/><br/>Night: Under the moonlight, the Taj Mahal has a silvery glow, making it look ethereal.
                    <br/><br/>Weather Effects: On cloudy days or during the monsoon season, the Taj can appear darker, or the marble can take on a more subdued greyish hue. The shifting weather conditions can create dramatic effects, making the monument seem almost alive as it interacts with the environment.

                    This colour change phenomenon is one of the Taj Mahal's many magical features, and it adds to the wonder of visiting this iconic structure at different times. It’s said that the changing colours also represent the different moods of the Empress Mumtaz Mahal, in whose memory the Taj was built.

                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>                
              </div>
            </div>
          </div>



              {/* Section 1 */}
          <div ref={section6Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
                LASER HAZARDS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={hazard}
                      alt="Aristotle"
                      className="w-full h-[500px] md:h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong> A Concern for Aviation Safety</strong>
                    <br />
                    The act of directing a laser pointer towards an aircraft may appear benign; however, it can result in significant repercussions for both pilots and passengers. The powerful beam of light has the potential to temporarily impair a pilot’s vision, divert their attention from essential tasks, and in some cases, inflict lasting damage to their eyes.
                    <br /><br />
                    In 2017, a Virgin Atlantic flight from London to New York had a close call with a laser shortly after taking off. The co-pilot was temporarily blinded by the bright light, forcing the plane to head back to Heathrow Airport. This incident caused major delays and financial troubles, shining a light on the dangers of laser strikes.
                    <br /><br />
                    In response to this escalating concern, experts and organizations, including the International Laser Display Association (ILDA), have formulated a comprehensive strategy to safeguard aviation safety.
                    TSI Journal suggests cockpit protection devices with specialized filters to block certain laser wavelengths, allowing pilots to see clearly while remaining safe. Meanwhile, Tech Briefs Journal mentions detection systems using smart sensors to track laser beams aimed at aircraft for faster response by authorities. At events like Disney’s EPCOT, spotters monitor the airspace to intervene if lasers are detected.
                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Increasing beam divergence also reduces risk by spreading and lowering the beam’s power in sensitive zones. Regulatory approaches, such as restricting sales, adding warning labels, and public education, aim to prevent misuse.
                  <br /><br />
                  For pilots, measures include reading NOTAMs (Notice to Air Mission), to identify laser activity along flight paths and undergoing training to manage laser illumination incidents. While goggles and glare shields can offer protection, their practicality in civil aviation is limited due to comfort, visibility issues, and wavelength variability. However, specialized goggles or active dimming technologies may be useful in specific scenarios, such as military operations or persistent laser threats.
                  <br /><br />
                  Remember, the next time you point a laser playfully into the sky, remember it’s more than just a harmless beam of light. What might seem like an innocent moment of entertainment might carry far more serious implications. Let’s be responsible – because no fleeting thrill is worth compromising anyone’s safety or wellbeing.
                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>
                
                  
              </div>
            </div>
          </div>




          <div ref={section7Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
              What If We Built Things to Last?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    In the fire station of Livermore, California, a single light bulb has been quietly defying time for over  120 years. Known as the Centennial Light, it has glowed almost continuously since 1901—a tiny,  unassuming marvel. But this isn’t just a story about a light bulb. It’s a glimpse into a shadowy tale of  invention, manipulation, and the delicate balance between progress and profit. 
                    <br /><br />
                    At the dawn of the 20th century, light bulbs symbolized boundless innovation. Each new design lasted longer, shone brighter, and cost less to maintain. Yet somewhere along the way, this brilliance was deliberately dimmed—not by science, but by a business decision. Enter the Phoebus Cartel, a secret alliance of global manufacturers that conspired to limit the lifespan of light bulbs to a mere 1,000 hours.
                    </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Their goal? Ensure that consumers would have to buy replacements again and again. 
                  <br /><br />
                  But here’s the twist: this wasn’t just greed for greed’s sake. Shorter lifespans offered benefits like brighter light and better efficiency. Still, it raises a question that feels eerily modern: Are our technologies truly designed for us, or for the profits they generate?
                  <br /><br />
                  Think about it. How many of your devices—your phone, your headphones, even your appliances— feel like they give up long before they should? How often do you find yourself replacing something that should have lasted longer? Do you ever wonder if they’re built to fail? 
                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>
                
                
                
                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  Yet, against all odds, an exception shines through a testament that a different path is possible. Imagine a lamp so efficient and long-lasting that it might never need replacing for years. Sounds like a fantasy? These lamps exist today—but only in Dubai.
                  <br /><br />
                  In a remarkable collaboration between Philips Lighting and Sheikh Mohammed Bin Rashid Al Maktoum, the Dubai Lamps were born as a bold experiment in sustainability and innovation. Designed to consume as little as 1 watt of power while providing bright and reliable light, these lamps promise not only energy savings but also a dramatic reduction in waste. 
                  <br /><br />
                  Here’s the catch: these lamps are available exclusively in Dubai. Philips retains the sole rights to manufacture and distribute them there. The reason? Their longevity directly challenges the global business model of frequent replacements—a model the rest of the world seems resigned to accept.

                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
                    
                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  But isn’t this proof that it’s not impossible to build a future where products last longer and waste less? Dubai’s bold step demonstrates that the idea of durability isn’t some outdated relic; it’s an achievable reality when innovation aligns with sustainability.
                  <br /><br />
                  <strong>It's a Choice!</strong>
                  The Centennial Light and the Dubai Lamps tell two sides of the same story—one of endurance, the other of possibility. One has burned through decades as a quiet guardian of history; the other shines as a beacon of what we could achieve if innovation aligned with sustainability
                  <br /><br />
                  Together, they remind us that the future of innovation is a choice—a choice between permanence and disposable convenience!  
                  </p>
                
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
              </div>
            </div>
          </div>


          {/* Section 2 */}
          <div ref={section8Ref} className="mb-16">
            <div className="bg-black/[.4] p-8 rounded-lg shadow-lg backdrop-blur-[30px]">
              <h2 className="text-3xl font-bold font-montserrat text-center text-white mb-8">
                ILLUMINATING THE INVISIBLE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column: Image and Text */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden ">
                    <img
                      src={berries}
                      alt="Berries"
                      className="w-full h-[300px] object-cover  shadow-md"
                    />
                  </div>
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>HYPERSPECTRAL VISION ENGINEER</strong>
                    <br />
                    One could easily separate the cranberries from the blueberries based on their colour. However, if we wanted to separate the berries that were beginning to rot from the ones that are still unripe, we cannot do that reliably simply by looking at their colour.
                  </p>
                </div>
                {/* Second Column: Text */}
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    What if instead of just recording the intensity of reflected red light, blue light, and green light like normal cameras, there was a device that recorded each and every wavelength of reflected light separately? The envisioned device functions similarly to a spectrometer but stands out by using ambient light much like a camera instead of requiring uniform intensity across all wavelengths as a spectrometer does. That sounds interesting, and then this could be your future career.
                  </p>
                </div>
                
                
                <div className="col-span-1 md:col-span-2 border-t border-gray-500 w-full my-4"></div>
                
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  <strong>WHO IS A SPECTRAL VISION ENGINEER?</strong>
                  <br />
                  Unlike traditional imaging, hyperspectral technology captures the full spectrum of light at every pixel, revealing invaluable insights invisible to the human eye.
                  <br /><br />
                  A hyperspectral engineer is expected to be adept at modeling the absorption spectrum of various materials platforms that absorb a large range of wavelengths, as well as the alignment of optical components. 
                  <br /><br />
                  To confer usefulness to the vast amount of data recorded a hyperspectral engineer must be adept at signal and data processing.
                  <br /><br />
                  One must be able to come up with an index that completely quantifies the target application while dealing with a wide spectrum - for example in agricultural monitoring a commonly used index is NDVI (Normalized Difference Vegetation Index).
                  </p>
                  
                  <div className="relative overflow-hidden ">
                  </div>
                </div>    
                    
                <div className="flex flex-col gap-4">
                  
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                  <strong>Skills Every Hyperspectral Vision Engineer Needs</strong>
                  <br/>
                  Optical Design Expertise: Proficiency in Zemax and Code V for optical design. Knowledge of CAD tools for designing pushbroom architectures.
                  <br /><br />
                  Programming Skills: Strong programming foundation in Python, MATLAB, and related languages.
                  <br /><br />
                  Image Processing: Experience with Python libraries and MATLAB for image processing.
                  <br /><br />
                  Optical Systems Knowledge: Understanding of hyperspectral cameras, sensors, and spectroscopy. Hands-on experience with imaging technologies.
                  <br /><br />
                  Advanced Analytical Skills: Expertise in computer vision and image processing. Proficiency in machine learning frameworks like TensorFlow, PyTorch, and Scikit-learn for spectral data analysis.
                  <br /><br />
                  Imaging Software Proficiency: Experience with ENVI and ERDAS imaging software.
                  <br /><br />
                  High-Performance Computing: Familiarity with managing large-scale data using high-performance computing techniques.
                  <br /><br />
                  Soft Skills: Effective teamwork in multidisciplinary environments. Innovative problem-solving approach to complex challenges.
                  </p>
                
                  <div className="relative overflow-hidden ">
                  </div>
                </div>  

                <div className="col-span-1 md:col-span-2 border-t border-gray-500 w-full my-4"></div>
                
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>Top Employment Sectors for Hyperspectral Vision Engineers</strong>
                  </p>
                  <ul className="list-decimal list-outside pl-6 space-y-2 text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <li>Aerospace and Defense: Surveillance, target identification, and remote sensing.</li>
                    <li>Agriculture Technology: Crop health monitoring, disease detection, and yield optimization.</li>
                    <li>Environmental Monitoring and Geosciences: Climate studies, resource exploration, and water quality analysis.</li>
                    <li>Medical Imaging and Biotechnology: Early disease detection and surgical guidance.</li>
                    <li>Consumer Electronics and AI: Vision systems for autonomous vehicles, robotics, and smart devices.</li>
                    <li>Academia and Research: Fundamental research on imaging technologies.</li>
                  </ul>
                  <div className="relative overflow-hidden "></div>
                </div>
                    
                <div className="flex flex-col gap-4">
                  <p className="break-inside-avoid text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <strong>Top Companies Hiring Hyperspectral Vision Engineers</strong>
                  </p>
                  <ul className="list-decimal list-outside pl-6 space-y-2 text-lg leading-[2rem] font-montserrat text-white text-justify">
                    <li>The leading companies working on this technology are:</li>
                    <li>TruTag Technologies: Specializing in material identification.</li>
                    <li>Planet Labs: Innovating in satellite imaging.</li>
                    <li>Pixxel: Leading in hyperspectral solutions for global challenges.</li>
                    <li>Headwall Photonics: Remote sensing, machine vision, and industrial inspection.</li>
                    <li>SPECIM: Manufactures hyperspectral imaging systems and cameras covering wavelengths from VNIR to LWIR.</li>
                    <li>Raytheon: Aerospace, defense, cybersecurity, and intelligence.</li>
                    <li>
                      The field also seems to be financially promising as entry-level optical engineers working in remote sensing-related fields receive a median salary of about $85,000 per year as per SPIE Global Salary Report 2023.
                    </li>
                  </ul>
                  <div className="relative overflow-hidden "></div>
                </div> 


              </div>
            </div>
          </div>

          {/* Section 3 */}
         
  



          {/* Section 4 */}
          <div ref={section9Ref} className="mb-16">
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
                <div className="crossword-wrapper">
                  <Crossword
                    ref={crosswordRef}
                    data={data}
                    theme={customTheme}
                    onCrosswordCorrect={handleCrosswordCorrect}
                    onCellChange={handleCellChange}
                  />
                </div>
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
          
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative z-10">
        <div ref={sectionendRef}></div>
        <Footer />
      </div>
    </div>
  );
}

export default NewsletterJan;