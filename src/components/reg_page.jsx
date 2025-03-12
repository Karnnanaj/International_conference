import React, { useState } from "react";
import "./animation.css";
import { Link } from "react-router-dom";
import etchnewlogo from "../images/logonew.png";

function NewsletterRegistration() {
  const [isInterested, setIsInterested] = useState("");
  const [isQuizParticipant, setIsQuizParticipant] = useState("");

  const handleWorkingModelDropdownChange = (e) => {
    setIsInterested(e.target.value);
  };

  const handleQuizDropdownChange = (e) => {
    setIsQuizParticipant(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements["entry.1556369182"].value,
      email: e.target.elements["entry.703692664"].value,
      phone: e.target.elements["entry.479301265"].value,
      profession: e.target.elements["entry.588393791"].value,
      instName: e.target.elements["entry.2109138769"].value,
      registerFor: e.target.elements["entry.1324901878"].value,
      participants: e.target.elements["entry.572853419"].value,
      visitDate: Array.from(e.target.elements.visit_date.selectedOptions).map(
        (option) => option.value
      ),
      workingModel: e.target.elements["entry.88264338"].value,
      workingModelDetails: e.target.elements["entry.507122158"]?.value || "",
      quizParticipation: e.target.elements["entry.1667245316"].value,
      quizDetails: e.target.elements["entry.2016926282"]?.value || "",
    };

    console.log("Form Data Submitted: ", formData);

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfEwLd2Zw4ulm7UgDLwtPANbu8h7TQZvQkhunRqebXi0lZP2A/formResponse";

    const data = new URLSearchParams();
    data.append("entry.1556369182", formData.name);
    data.append("entry.703692664", formData.email);
    data.append("entry.479301265", formData.phone);
    data.append("entry.588393791", formData.profession);
    data.append("entry.2109138769", formData.instName);
    data.append("entry.1324901878", formData.registerFor);
    data.append("entry.572853419", formData.participants);
    formData.visitDate.forEach((date) => data.append("entry.1200381165", date));
    data.append("entry.88264338", formData.workingModel);
    data.append("entry.507122158", formData.workingModelDetails);
    data.append("entry.1667245316", formData.quizParticipation);
    data.append("entry.2016926282", formData.quizDetails);

    console.log("Data being submitted to Google Form: ", [...data.entries()]);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",  
      body: data,
    })
      .then(() => {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        e.target.reset(); // Clear the form
        window.location.reload(); // Refresh the page
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
      });
  };

  return (
    <><p className="justify-self-center text-2xl pc:text-2xl text-center border-t-2  border-white pt-2 bg-black text-white font-defmono w-full">
    <span className="text-red-600">Registration for ETCHNEW 2025 is Closed!</span><br />
    Stay connected with ETCHES, our photonics exclusive newsletter, 
    <Link       
      to="/newsletter_registration"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="hover:translate-y-2 transition duration-200 text-red-400 ease-in-out hover:underline hover:text-red-600 p-1   "
    >

      sign up now!
    </Link>
    </p>
  
      <main className="main-login">
      <div className="right-login">
        <div className="card-login">
          <h1>REGISTRATION</h1>
          <form className="formbox" onSubmit={handleFormSubmit}>
            <div className="textfield">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="entry.1556369182"
                id="name"
                placeholder="Your Name" />
            </div>
            <div className="textfield">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="entry.703692664"
                id="email"
                placeholder="Your Email" />
            </div>
            <div className="textfield">
              <label htmlFor="phone">Phone no</label>
              <input
                type="text"
                name="entry.479301265"
                id="phone"
                placeholder="Phone Number"
                pattern="\d{10}"
                title="Enter a valid 10-digit phone number" />
            </div>
            <div className="textfield">
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                name="entry.588393791"
                id="profession"
                placeholder="Student / Teacher / Other" />
            </div>
            <div className="textfield">
              <label htmlFor="instName">Institute's Name</label>
              <input
                type="text"
                name="entry.2109138769"
                id="instName"
                placeholder="Current Institute"
                required />
            </div>
            <div className="textfield">
              <label htmlFor="registerFor">Registering for</label>
              <input
                type="text"
                name="entry.1324901878"
                id="registerFor"
                placeholder="Self / Institute / Other"
                required />
            </div>
            <div className="textfield">
              <label htmlFor="participants">
                If for institute, No of participants
              </label>
              <input
                type="text"
                name="entry.572853419"
                id="participants"
                placeholder="For institute only"
                required />
            </div>
            <div className="textfield">
              <label htmlFor="visit_date">Date you prefer to visit</label>
              <select
                name="visit_date"
                id="visit_date"
                className="textfield"
                required
              >
                <option value="">Select date</option>
                <option value="23">23rd Jan 2025</option>
                <option value="24">24th Jan 2025</option>
                <option value="24&23">23rd & 24th Jan 2025</option>
              </select>
            </div>
            <div className="textfield">
              <label htmlFor="workingModel">
                Are you interested in submitting a working model for the event?
              </label>
              <select
                name="entry.88264338"
                id="workingModel"
                className="textfield"
                required
                onChange={handleWorkingModelDropdownChange}
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {isInterested === "Yes" && (
              <div className="textfield">
                <label htmlFor="workingModelDetails">
                  Enter all participants' details for working model (max 3)
                </label>
                <input
                  type="text"
                  name="entry.507122158"
                  id="workingModelDetails"
                  placeholder="Name1, Name2,.., Phone1, Phone2.., Grade1, Grade2 "
                  required />
              </div>
            )}
            <div className="textfield">
              <label htmlFor="quiz">
                Will you be participating in the quiz competition?
              </label>
              <select
                name="entry.1667245316"
                id="quiz"
                className="textfield"
                required
                onChange={handleQuizDropdownChange}
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {isQuizParticipant === "Yes" && (
              <div className="textfield">
                <label htmlFor="quizDetails">
                  Enter all participants' details for quiz (max 3)
                </label>
                <input
                  type="text"
                  name="entry.2016926282"
                  id="quizDetails"
                  placeholder="Name1, Name2,.., Phone1, Phone2.., Grade1, Grade2 "
                  required />
              </div>
            )}
            <button type="submit" className="btn-login">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="left-login">
        <h1>
          <br />
          the world of light
        </h1>
        <img src={etchnewlogo} alt="cover" className="lg:block pc:w-[50%] pc:h-auto p-10" />
      </div>
    </main><p className="justify-self-center text-2xl pc:text-2xl text-center border-t-2 border-white pt-2 bg-black text-white font-defmono  w-[100vw]">
        Copyright <span className="text-red-600">ETCHNEW</span> 2025 &#169;
      </p></>
  );
}

export default NewsletterRegistration;
