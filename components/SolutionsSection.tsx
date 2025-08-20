"use client";

import { motion } from "framer-motion";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";

const services = [
    {
        image: "https://images.unsplash.com/photo-1598257006626-0be6f8748a63?q=80&w=2670&auto=format&fit=crop",
        title: "Custom Software Development",
        description: "We build tailored platforms for HR, legal, onboarding, and operational workflows — designed for African institutions.",
    },
    {
        image: "https://images.unsplash.com/photo-1581092787768-6a165bafe71e?q=80&w=2670&auto=format&fit=crop",
        title: "Church App",
        description: "Our flagship product for faith-based organizations. Church App streamlines member management, digital giving, communication, and event planning.",
    },
    {
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2670&auto=format&fit=crop",
        title: "Mobile & Web Applications",
        description: "Cross-platform apps for education, outreach, and civic engagement — optimized for both urban and rural users.",
    },
    {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        title: "Cloud & Infrastructure Services",
        description: "Secure hosting, data management, and cloud migration for corporates, SMEs, non-profits, and government agencies.",
    },
    {
        image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2670&auto=format&fit=crop",
        title: "IT Consulting & Strategic Advisory",
        description: "We help organizations align their tech investments with long-term goals through expert guidance and hands-on support.",
    },
    
];

export default function ServiceSection() {
    return (
        <section className="py-20 bg-white text-center">
            {/* Header */}
            <div className="mb-10">
                
                <p className="text-blue-600 font-medium mb-1">Our Solutions</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                    We Offer Quality Service
                </h2>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        className="relative group overflow-hidden rounded-md shadow-md transition-all"
                    >
                        {/* Image */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-72 object-cover"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                            <div className="bg-white p-4 rounded shadow">
                                <h3 className="text-md font-semibold text-slate-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-600 mb-3">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm text-blue-600 font-semibold hover:underline"
                                >
                                    Read More <FaArrowRight className="ml-1" />
                                </a>
                            </div>
                        </div>

                        {/* Bottom Title Bar */}
                        <div className="absolute bottom-0 left-0 w-full bg-white flex justify-between items-center px-4 py-3 transition-opacity duration-300 group-hover:opacity-0">
                            <span className="text-sm font-semibold text-slate-800">
                                {service.title}
                            </span>
                            <span className="bg-slate-800 p-1 rounded-full">
                                <FaArrowUp className="text-white text-xs" />
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* More Services Button */}
            {/* <div className="mt-12">
                <a
                    href="#"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                >
                    MORE SERVICES
                </a>
            </div> */}
        </section>
    );
}
