import React from "react";
import "./animation.css";
import etchnewlogo from "../images/logonew.png";
import cover from "../images/coverpage.png";

function NewsletterRegistration() {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      college: e.target.elements.college.value,
      year: e.target.elements.year.value,
    };

    console.log("Form Data Submitted: ", formData);

    const googleFormURL =
      "https://docs.google.com/forms/d/1vAPP6gWxTGWfiA2wJNRWWZAO4IaYUg3mmdQxhsLrOhM/formResponse";

    const data = new URLSearchParams();
    data.append("entry.1518872528", formData.name); // Replace with actual field keys from Google Form
    data.append("entry.1752024009", formData.email);
    data.append("entry.1894639801", formData.phone);
    data.append("entry.88342454", formData.college);
    data.append("entry.640546063", formData.year);

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
          <h1>ETCHES</h1>
          <form className="formbox" onSubmit={handleFormSubmit}>
            <div className="textfield">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Full name" 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Email address" 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="phone">Phone no</label>
              <input 
                type="text" 
                name="phone" 
                placeholder="Contact number (10 digits)" 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="college">College/School</label>
              <input 
                type="text" 
                name="college" 
                placeholder="Institution name (College/School/Organization)" 
                required 
              />
            </div>
            <div className="textfield">
              <label htmlFor="year">Year/Grade of Study</label>
              <input 
                type="text" 
                name="year" 
                placeholder="Year of study or current designation (e.g., 1st Year, 10th Grade, Graduate, Employee)" 
                required 
              />
            </div>
            <button type="submit" className="btn-login">
              Register
            </button>
          </form>

        </div>
      </div>
      <div className="left-login">
        <h1>
          Register and start exploring
          <br />
          the world of light
        </h1>
        <img src={cover} alt="cover" className="lg:block pc:w-[50%] pc:h-auto p-10" />
      </div>
    </main><p className="justify-self-center text-2xl pc:text-2xl text-center border-t-2 border-white pt-2 bg-black text-white font-defmono  w-full">
        Copyright <span className="text-red-600">ETCHNEW</span> 2025 &#169;
      </p></>
  );
}

export default NewsletterRegistration;
