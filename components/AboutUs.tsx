// components/AboutUs.tsx

import React from "react";
import { FaTools, FaPaintBrush, FaBuilding } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content - About Company */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            <span className="border-l-4 border-yellow-500 pl-3">🧾 About Us</span>
          </h2>
          <p className="text-yellow-600 font-semibold mb-2">Who We Are</p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            <span className="font-semibold">Teko Systems Limited</span> is a technology company headquartered in{" "}
            <span className="text-gray-900 font-medium">Nairobi, Kenya</span>, with operations spanning East, West, and Southern Africa. We specialize in building digital tools that empower businesses, churches, schools, and civic organizations to thrive in a connected world.
          </p>

          {/* Vision */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be Africa’s most trusted partner in digital transformation — bridging innovation with impact.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To design and deploy intelligent, user-centric technology solutions that solve real-world challenges in business, education, faith-based institutions, and community development.
            </p>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-gray-800 font-medium">
              {["Integrity", "Innovation", "Inclusivity", "Impact"].map((value) => (
                <li
                  key={value}
                  className="bg-gray-100 rounded-2xl shadow-sm py-4 px-6"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content - What We Do (Example placeholder for construction) */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-600 mb-6">What We Do</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaBuilding className="text-yellow-500 text-3xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Building Construction</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaTools className="text-yellow-500 text-3xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Building Repairs</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPaintBrush className="text-yellow-500 text-3xl" />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Custom Design</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
