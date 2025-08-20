"use client";

import { motion } from "framer-motion";
import { FaBug, FaFileAlt, FaEye, FaHandsHelping, FaCodeBranch, FaMousePointer } from "react-icons/fa";

const features = [
  {
    icon: <FaEye className="text-4xl text-indigo-500" />,
    title: "Live preview",
    description: "Preview the onboarding flows you create on your website or local environment.",
  },
  {
    icon: <FaMousePointer className="text-4xl text-blue-500" />,
    title: "Element inspection",
    description: "Live preview provides a tool where you can easily select your element to apply the guides.",
  },
  {
    icon: <FaCodeBranch className="text-4xl text-cyan-500" />,
    title: "Control flow display",
    description: "Full control over how, where and when you want your flows to be displayed for your users.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-green-500" />,
    title: "Help along the way",
    description: "If you're stuck working in boardme, we've got you covered. We are helping with videos and tips.",
  },
  {
    icon: <FaBug className="text-4xl text-red-500" />,
    title: "Active bug reporting",
    description: "Find something not working as expected? Report the issue within a few clicks.",
  },
  {
    icon: <FaFileAlt className="text-4xl text-purple-500" />,
    title: "Detailed documentation",
    description: "Live preview provides a tool where you can easily select your element to apply the guides.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0e0c2c] to-[#1a1441] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Other key features
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#17103a] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
