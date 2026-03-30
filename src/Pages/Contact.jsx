import React from 'react'
import Section from '../Components/Section'

const Contact = () => {
  return (
    <Section>
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8">Contact Us</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Have a question, feedback, or need assistance? We’re here to help. Reach out to our support team and we’ll respond within 24 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6">
              You can reach us via email, phone, or direct message. Our support team is available 24/7 for all order and product inquiries.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-700">support@exclusive-store.com</p>
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-700">+1 (800) 123-4567</p>
              </div>
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-gray-700">1234 Commerce Blvd, Suite 100, New York, NY 10001</p>
              </div>
              <div>
                <h3 className="font-bold">Working Hours</h3>
                <p className="text-gray-700">Mon - Fri: 9:00 AM - 8:00 PM, Sat - Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">Send A Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Type your message here..." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:border-red-500 outline-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Contact
