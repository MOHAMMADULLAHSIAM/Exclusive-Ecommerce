import React from 'react'
import Section from '../Components/Section'
import logo from '../assets/Logo.png'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate=useNavigate()
  return (
    <Section>
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-16">

        {/* Hero Section */}
        <section className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">About Exclusive</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Welcome to Exclusive — your one-stop destination for premium quality products 
            at unbeatable prices. We bring you a seamless shopping experience with trust, 
            speed, and style.
          </p>
        </section>

        {/* About Details - Image & Text */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex justify-center md:justify-start">
            <div className="relative group animate-pulse">
              {/* Glow effect background */}
              <div className="absolute -inset-4 bg-linear-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Main image container */}
              <div className="relative z-10 transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
                <img
                  src={logo}
                  alt="Exclusive Logo"
                  className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain shadow-2xl group-hover:shadow-red-500/25 transition-all duration-700 border-4 border-white/30 backdrop-blur-sm"
                />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-red-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

                {/* Floating particles effect */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -right-3 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-out"></div>
              </div>

              {/* Rotating gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-4 px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Who We Are</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Exclusive is an innovative eCommerce platform focused on delivering 
              high-quality fashion, electronics, and lifestyle products. Our goal is 
              to make online shopping easy, affordable, and enjoyable for everyone.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We believe in customer satisfaction, fast delivery, and reliable service. 
              Thousands of customers trust us every day for their shopping needs.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 sm:mb-10 md:mb-14">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="p-4 sm:p-6 md:p-8 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Get your products delivered quickly and safely to your doorstep.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 text-center">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Best Quality</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We ensure top-quality products from trusted suppliers.
              </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 text-center sm:col-span-2 md:col-span-1">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Your transactions are safe with our secure payment system.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-linear-to-br from-gray-50 to-gray-100 p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 md:mb-12">Our Achievements</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1 sm:mb-2">10K+</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Happy Customers</p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1 sm:mb-2">5K+</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Products</p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1 sm:mb-2">99%</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Satisfaction Rate</p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-1 sm:mb-2">24/7</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Support</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6">
            Start Shopping with Exclusive Today
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            Discover amazing products and enjoy a smooth shopping experience.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base" onClick={()=>navigate("/shop")}>
            Shop Now
          </button>
        </section>

      </div>

    </Section>
  )
}

export default About
