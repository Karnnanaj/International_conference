import React from "react";
import "./animation.css";
import etchnewlogo from "../images/logonew.png";
import cover from "../images/coverpage.png";

function TreasureHuntRegistration() {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const formData = {
      nameofgroup: e.target.elements.nameofgroup.value,
      nameofmembers: e.target.elements.nameofmembers.value,
      whatsappnoofamember: e.target.elements.whatsappnoofamember.value,
      email: e.target.elements.email.value,
      college: e.target.elements.college.value,
    };

    console.log("Form Data Submitted: ", formData);

    const googleFormURL =
      "https://docs.google.com/forms/d/1HHQPjVWliB_FTbw0lWuH7K5eSlBNVxd8IMG8CcLjQkE/formResponse";

    const data = new URLSearchParams();
    data.append("entry.293553875", formData.nameofgroup); // Replace with actual field keys from Google Form
    data.append("entry.1440314885", formData.nameofmembers);
    data.append("entry.490335431", formData.whatsappnoofamember);
    data.append("entry.24938287", formData.email);
    data.append("entry.2001990116", formData.college);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors", // Required for Google Forms
      body: data,
    })
      .then(() => {
        alert("Form submitted successfully!");
        window.location.reload(); // Refresh the page after successful submission
      })
      .catch((err) => console.error("Error submitting form:", err));
  };

  return (
    <><main className="main-login">
          <div className="right-login">
              <div className="card-login">
                  <h1>Treasure Hunt Registration</h1>
                  <form className="formbox" onSubmit={handleFormSubmit}>
                      <div className="textfield">
                          <label htmlFor="nameofgroup">Group Name</label>
                          <input
                              type="text"
                              name="nameofgroup"
                              placeholder="Enter your group's name"
                              required />
                      </div>
                      <div className="textfield">
                          <label htmlFor="nameofmembers">Group Members (Max 4)</label>
                          <input
                              type="text"
                              name="nameofmembers"
                              placeholder="E.g., Alice, Bob, Charlie, Dave"
                              required />
                      </div>
                      <div className="textfield">
                          <label htmlFor="whatsappnoofamember">WhatsApp Number</label>
                          <input
                              type="text"
                              name="whatsappnoofamember"
                              placeholder="Enter a member's WhatsApp number"
                              required />
                      </div>
                      <div className="textfield">
                          <label htmlFor="email">Email ID</label>
                          <input
                              type="email"
                              name="email"
                              placeholder="Enter a valid email address"
                              required />
                      </div>
                      <div className="textfield">
                          <label htmlFor="college">Institution Name</label>
                          <input
                              type="text"
                              name="college"
                              placeholder="Enter your college or school name"
                              required />
                      </div>

                      <button type="submit" className="btn-login">
                          Register
                      </button>
                      <p>
                        Participation fee of 200Rs will be required at the time of the event. 
                      </p>
                  </form>
              </div>
          </div>
          <div className="left-login">
              <h1>
                  Register now and be part
                  <br />
                  of the hunt
              </h1>
              {/* <img
      src={cover}
      alt="Treasure Hunt Cover"
      className="lg:block pc:w-[50%] pc:h-auto p-10"
    /> */}
          </div>
      </main>
      <p className="text-2xl pc:text-2xl text-center border-t-2 border-white pt-2 bg-black text-white font-defmono  w-full">
              Copyright <span className="text-red-600">ETCHNEW</span> 2025 &#169;
        </p></>
  );
}

export default TreasureHuntRegistration;
