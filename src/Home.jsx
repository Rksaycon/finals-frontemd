import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './assets/pew.jpg';
import './home.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero d-flex justify-content-start align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          height: '100vh',
          color: 'white',
          textAlign: 'left',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
        }}
      >
        <div
          style={{
            maxWidth: '50vw',
            paddingLeft: '5vw',
          }}
        >
          <h1>Welcome to CodeSphere University</h1>
          <p>Your journey towards excellence in education starts here.</p>
          <Link to="/create-account" className="btn btn-primary btn-lg">
            Apply Now
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container py-5" style={{ width: '90vw', margin: '0 auto' }}>
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center">
          CodeSphere University is a leading institution in providing quality education. Founded on the principles of innovation, research, and community engagement, we aim to prepare students for a future in a rapidly evolving world.
        </p>
      </section>

      {/* Courses/Programs Section */}
      <section className="container py-5" style={{ backgroundColor: '#f8f9fa', width: '90vw', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Programs We Offer</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Computer Science</h5>
                <p className="card-text">Learn cutting-edge technologies in AI, machine learning, and software development.</p>
                <Link to="/programs/computer-science" className="btn btn-info">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Business Administration</h5>
                <p className="card-text">Explore business strategies, marketing, finance, and leadership.</p>
                <Link to="/programs/business-administration" className="btn btn-info">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Electrical Engineering</h5>
                <p className="card-text">Prepare for a career in power systems, electronics, and telecommunications.</p>
                <Link to="/programs/electrical-engineering" className="btn btn-info">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="container py-5" style={{ width: '90vw', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Admissions</h2>
        <p className="text-center">
          Ready to take the first step towards your future? Our application process is simple and straightforward. Apply today and join the CodeSphere University community.
        </p>
        <div className="text-center">
          <Link to="/create-account" className="btn btn-success btn-lg">Start Your Application</Link>
        </div>
      </section>

      {/* Departments Section */}
      <section className="container py-5" style={{ backgroundColor: '#f8f9fa', width: '90vw', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Our Departments</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Computer Science</h5>
            <p>Innovating the future of technology through research and education.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Engineering</h5>
            <p>Focusing on practical skills and knowledge in various engineering fields.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Business</h5>
            <p>Preparing future leaders for success in the global marketplace.</p>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="container py-5" style={{ width: '90vw', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Campus Life</h2>
        <p className="text-center">
          At CodeSphere University, we offer a vibrant campus life with student organizations, sports, and events. Our students are encouraged to engage in various extracurricular activities that complement their academic experience.
        </p>
      </section>

      {/* Contact Section */}
      <section className="container py-5" style={{ backgroundColor: '#f8f9fa', width: '90vw', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center">
          Have any questions? Feel free to reach out to us. We're here to help!
        </p>
        <div className="text-center">
          <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4" style={{ backgroundColor: '#343a40', color: '#fff' }}>
        <p>&copy; 2024 CodeSphere University | All Rights Reserved</p>
        <div>
          <Link to="/facebook" className="text-white mx-2">Facebook</Link>
          <Link to="/twitter" className="text-white mx-2">Twitter</Link>
          <Link to="/linkedin" className="text-white mx-2">LinkedIn</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
