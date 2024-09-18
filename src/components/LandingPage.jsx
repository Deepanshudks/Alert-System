import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="opacity-85 bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp11051717.jpg")' }}>
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Stay Alert, Stay Safe with Arista</h2>
            <p className="text-lg mb-8 flex items-center">
              Arista helps you stay connected with your neighborhood and be aware of any emergencies. Get real-time alerts for your safety.
            </p>
            {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
              Join the Community
            </button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Features</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <h4 className="text-xl font-bold mb-2">Real-Time Alerts</h4>
              <p>Get instant notifications about emergencies or important updates in your neighborhood.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <h4 className="text-xl font-bold mb-2">Neighborhood Watch</h4>
              <p>Collaborate with your neighbors to ensure safety by reporting suspicious activities.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-80">
              <h4 className="text-xl font-bold mb-2">Secure Communication</h4>
              <p>Stay connected and communicate securely with your community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">About Arista</h3>
          <p className="max-w-2xl mx-auto text-lg">
            Arista is a platform built to ensure the safety of neighborhoods by providing real-time alert systems, collaboration tools, and secure communication. Our goal is to create safer and more connected communities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
          <p className="max-w-xl mx-auto mb-8">We would love to hear from you. Whether you have a question or need support, reach out to us!</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Arista. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
