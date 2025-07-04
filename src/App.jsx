import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { database } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

const App = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    service: "",
    message: "",
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    const collectionRef = collection(database, "userAppointment");
    await addDoc(collectionRef, {
      name: userDetails.name,
      email: userDetails.email,
      number: userDetails.number,
      date: userDetails.date,
      service: userDetails.service,
      message: userDetails.message,
    })
      .then(() => {
        alert("appointment booked");
        setUserDetails({
          name: "",
          email: "",
          number: "",
          date: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const [doctors] = useState([
    {
      name: "Dr. Olivia Harrison",
      specialization: "Cardiologist",
      image: "./doc1.jpeg",
    },
    {
      name: "Dr. Ethan Brooks",
      specialization: "Pediatrician",
      image: "./doc2.jpeg",
    },
    {
      name: "Dr. Ava Mitchell",
      specialization: "Dermatologist",
      image: "./doc3.jpeg",
    },
    {
      name: "Dr. Lucas Turner",
      specialization: "Orthopedic Surgeon",
      image: "./doc4.jpeg",
    },
    {
      name: "Dr. Isabella Carter",
      specialization: "Neurologist",
      image: "./doc5.jpeg",
    },
    {
      name: "Dr. James Parker",
      specialization: "Oncologist",
      image: "./doc6.jpeg",
    },
    {
      name: "Dr. Amelia Johnson",
      specialization: "Gynecologist",
      image: "./doc7.jpeg",
    },
    {
      name: "Dr. Noah Walker",
      specialization: "Psychiatrist",
      image: "./doc8.jpeg",
    },
  ]);

  return (
    <div className="App">
      <nav
        id="navbar-example2"
        className="navbar navbar-expand-sm fixed-top px-3 mb-3"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
      >
        <a
          className="navbar-brand logo"
          href="#"
          style={{ fontSize: "3opx", fontWeight: "bold" }}
        >
          MehdikCare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" style={{ color: "#f2e0c9" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={{ color: "#f2e0c9" }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#service"
                style={{ color: "#f2e0c9" }}
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faqs" style={{ color: "#f2e0c9" }}>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                style={{ color: "#f2e0c9" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example p-3 rounded-2"
        tabindex="0"
      >
        {/*Header*/}
        <div
          id="home"
          className="header d-flex justify-content-around align-items-center m-3"
        >
          <div>
            <h3>
              Get <span className="text-colored">Expert Medical</span>{" "}
              Consultation
            </h3>
            <p>Exceptional Medical Healthcare services for all ages</p>
            <a className="btn" href="#faqs">
              Make An Appointment
            </a>
          </div>
          <div>
            <img src="/medical1.png" />
          </div>
        </div>
        {/*About*/}
        <div id="about" className="about row justify-content-around p-5 g-3">
          <div className="col-sm-6 col-12 d-flex justify-content-center align-items-center">
            <img src="./medical2.jpeg" />
          </div>
          <div className="col-sm-6 col-12 d-flex justify-content-center align-items-center flex-column">
            <div className="bord">
              <h5 className="">About Us</h5>
            </div>
            <p className="text-center">
              We are a modern medical hub committed to providing top-tier,
              personalized care to individuals and families. Our
              state-of-the-art facilities and expert team of healthcare
              professionals are dedicated to your well-being, offering a wide
              range of medical services designed to meet your unique needs. Our
              medical hub combines cutting-edge technology with compassionate
              care, making it easier for you to access quality healthcare in one
              convenient location.
            </p>
          </div>
        </div>
        {/*service*/}
        <div id="service" className="service g-2">
          <div className="bord d-flex justify-content-center align-items-center">
            <h5 className="">Our Services</h5>
          </div>
          <div className="container">
            <div className="row g-4 d-flex">
              <div className="col-sm-4 col-12 text-center">
                <h6>General Healthcare</h6>
                <p>
                  Our team of experienced doctors and healthcare professionals
                  is committed to delivering personalized care in a comfortable
                  and compassionate environment. Whether you need routine
                  check-ups, preventive care, or management of chronic
                  conditions, we are here to support your well-being.{" "}
                </p>
              </div>
              <div className=" col-sm-4 col-12 text-center">
                <h6>Diagnostic Services</h6>
                <p>
                  We offer a variety of diagnostic services to help identify
                  health conditions quickly and accurately. Our state-of-the-art
                  equipment, combined with our team of experienced
                  professionals, ensures that you receive the most reliable
                  results.
                </p>
              </div>
              <div className="col-sm-4 col-12 text-center">
                <h6>Pediatric Services</h6>
                <p>
                  Our pediatric specialists are dedicated to providing
                  high-quality care for infants, children, and adolescents. From
                  routine check-ups to specialized treatments, we are here to
                  ensure your child's health and development are on track.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Slider of Doctors*/}
        <div className="slider">
          <div className="bord d-flex justify-content-center align-items-center">
            <h5 className="">Meet Our Doctors</h5>
          </div>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            responsive={[
              {
                breakpoint: 1024, // For tablets and medium screens
                settings: {
                  slidesToShow: 3, // Show 2 items on tablets
                },
              },
              {
                breakpoint: 768, // For mobile screens
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  // Show 1 item on mobile
                },
              },
              {
                breakpoint: 480, // For mobile screens
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  // Show 1 item on mobile
                },
              },
            ]}
            className="serv"
          >
            {doctors.map((doc, index) => {
              return (
                <div key={index} className="doctor">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={doc.image}
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                  <div className="text-center">
                    <h6>{doc.name}</h6>
                    <p>{doc.specialization}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/*book appointment*/}
        <div className="book container-fluid">
          <div className="row justify-content-between">
            <div className="form-div col-sm-6 col-12">
              <div className="bord">
                <h5 className="">Book Appointment</h5>
              </div>
              <form>
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={userDetails.name}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, name: e.target.value });
                  }}
                />
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={userDetails.email}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, email: e.target.value });
                  }}
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  value={userDetails.number}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, number: e.target.value });
                  }}
                />
                <label>Appointment Date</label>
                <input
                  type="date"
                  required
                  value={userDetails.date}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, date: e.target.value });
                  }}
                />
                <span style={{ fontSize: "14px", color: "grey" }}>
                  Appointed time will be sent to your mail
                </span>
                <label>Service Type</label>
                <select
                  required
                  value={userDetails.service}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, service: e.target.value });
                  }}
                >
                  <option>Consultation</option>
                  <option>Medical Check-up</option>
                  <option>Diagnostic Service</option>
                  <option>Pediatric Service</option>
                </select>
                <label>Message (Optional)</label>
                <textarea
                  value={userDetails.message}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, message: e.target.value });
                  }}
                ></textarea>
                <button className="" onClick={sendMessage}>
                  Book Appointment
                </button>
              </form>
            </div>
            <div className="col-sm-6 col-12 d-flex justify-content-center align-items-center">
              <img
                src="./medical3.jpeg"
                style={{ height: "300px", width: "300px" }}
              />
            </div>
          </div>
        </div>
        {/**/}
        <div id="faqs" className="faqs p-4">
          <div className="bord d-flex justify-content-center align-items-center">
            <h5 className="">FAQS</h5>
          </div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How can I schedule an appointment with a doctor?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  You can schedule an appointment with one of our doctors by
                  calling our appointment line at or using our online booking
                  system.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  What types of services does your medical center offer?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Our medical center provides a wide range of services,
                  including but not limited to; General medical care, Diagnostic
                  services, Emergency care, Physical therapy and rehabilitation,
                  Wellness and mental health services, Preventive services.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What should I bring to my first appointment?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  For your first visit, please bring; Your insurance card, Any
                  medical records or test results related to your current health
                  concerns and A list of current medications{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Do you accept my insurance?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  We accept most major insurance plans. To verify if we accept
                  your specific insurance plan, please contact our billing
                  department or check directly with your insurance provider. We
                  also offer options for patients who are uninsured or
                  underinsured.{" "}
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What should I do if I need medical care after hours?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  If you need medical care after hours, you can:Call our 24/7
                  nurse hotline for advice or to speak with an on-call physician
                  or Visit our emergency department or urgent care facility for
                  immediate medical attention.
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="contact" className="contact row">
          <div className="container p-5">
            <div className="row justify-content-between align-items-center text-white">
              <div className="col-sm-4 col-12">
                <h6 className="">
                  <FontAwesomeIcon icon={faPhone} /> Call Us
                </h6>
                <p style={{ fontSize: "14px" }}>+234 703 2456 234</p>
                <p style={{ fontSize: "14px" }}>+234 703 2456 235</p>
              </div>

              <div className="col-sm-4 col-12">
                <h6 className="">
                  <FontAwesomeIcon icon={faLocationDot} /> Location
                </h6>
                <p style={{ fontSize: "14px" }}>
                  23 Idowu building, Idanre, Ondo State
                </p>
              </div>

              <div className="col-sm-4 col-12">
                <h6 className="">
                  <FontAwesomeIcon icon={faClock} /> Hours
                </h6>
                <p style={{ fontSize: "14px" }}>Mon-Fri: 8am - 8pm</p>
                <p style={{ fontSize: "14px" }}>Sat, Sun: 11am - 8pm</p>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center text-white">
            ©2025. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
