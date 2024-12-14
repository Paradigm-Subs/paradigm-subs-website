import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ParadigmSubsWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Paradigm Subs</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-200">Home</a></li>
              <li><a href="#services" className="hover:text-blue-200">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <section id="home" className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Paradigm Subscriptions</h1>
          <p className="text-xl text-gray-600 mb-8">Delivering Quality Subscriptions Tailored to Your Needs</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Flexible Plans</h2>
              <p>Customizable subscription options to fit your unique requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Easy Management</h2>
              <p>Simple online platform to track and manage your subscriptions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Support</h2>
              <p>24/7 customer support to assist you with any questions.</p>
            </div>
          </div>
        </section>

        <section id="services" className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Standard Subscription</h3>
              <p>Perfect for individuals looking for basic subscription services.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Premium Subscription</h3>
              <p>Advanced features and priority support for discerning clients.</p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 mb-4 border rounded"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 mb-4 border rounded"
              />
              <textarea 
                placeholder="Your Message" 
                className="w-full p-3 mb-4 border rounded h-32"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-300"><Mail size={24} /></a>
            <a href="#" className="hover:text-blue-300"><Phone size={24} /></a>
            <a href="#" className="hover:text-blue-300"><MapPin size={24} /></a>
          </div>
          <p>&copy; 2024 Paradigm Subscriptions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ParadigmSubsWebsite;
