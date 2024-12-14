import React from "react";
import { useNavigate } from "react-router-dom";
import "./admission.css";
function Admission() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", display: "flex", flexDirection: "column" }}
    >
      {/* Hero Section */}
      <div
        className="row justify-content-center align-items-center"
        style={{ flex: 1, textAlign: "center", padding: "20px 0" }}
      >
        <div className="col-md-8 col-12">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Welcome to CodeSphere University Admissions</h3>
            <p>
              CodeSphere University is dedicated to providing a transformative education that prepares you for success
              in your future career. We offer a wide range of programs designed to meet the demands of today’s fast-paced,
              technology-driven world.
            </p>
            <p>
              Ready to start your journey? Our application process is easy, and we're here to guide you every step of the
              way. Click below to begin your enrollment and create an account to apply.
            </p>
            <div className="text-center">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/create-account')}
              >
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process Steps */}
      <section className="container py-5" style={{ maxWidth: "100vw" }}>
        <h4 className="text-center mb-4">How to Apply</h4>
        <div className="row">
          <div className="col-md-4 col-12 text-center">
            <h5>Step 1: Create an Account</h5>
            <p>Sign up to access our application portal and start your application.</p>
          </div>
          <div className="col-md-4 col-12 text-center">
            <h5>Step 2: Submit Your Application</h5>
            <p>Fill in the required information and upload necessary documents like transcripts and ID proof.</p>
          </div>
          <div className="col-md-4 col-12 text-center">
            <h5>Step 3: Review & Submit</h5>
            <p>Once your application is complete, review and submit it. Our admissions team will get back to you soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admission;
