// components/SolutionsLayout.tsx
"use client";

import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiChurch } from "react-icons/gi";
import { FaMobileAlt, FaCloud, FaTools } from "react-icons/fa";

const categories = [
  { id: "01", label: "DATA PROVIDERS" },
  { id: "02", label: "TANGENTIAL SOLUTIONS" },
  { id: "03", label: "CONSULTING PARTNERS" },
];

const solutions = [
  {
    icon: <MdOutlineBusinessCenter className="text-3xl text-blue-600" />,
    title: "Custom Software Development",
    description:
      "We build tailored platforms for HR, legal, onboarding, and operational workflows — designed for African institutions.",
    link: "#",
  },
  {
    icon: <GiChurch className="text-3xl text-orange-600" />,
    title: "Church App",
    description:
      "Our flagship product for faith-based organizations. Church App streamlines member management, digital giving, communication, and event planning.",
    link: "#",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-green-600" />,
    title: "Mobile & Web Applications",
    description:
      "Cross-platform apps for education, outreach, and civic engagement — optimized for both urban and rural users.",
    link: "#",
  },
  {
    icon: <FaCloud className="text-3xl text-purple-600" />,
    title: "Cloud & Infrastructure Services",
    description:
      "Secure hosting, data management, and cloud migration for corporates, SMEs, non-profits, and government agencies.",
    link: "#",
  },
  {
    icon: <FaTools className="text-3xl text-red-600" />,
    title: "IT Consulting & Strategic Advisory",
    description:
      "We help organizations align their tech investments with long-term goals through expert guidance and hands-on support.",
    link: "#",
  },
];

export default function SolutionsLayout() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Left Sidebar */}
        <aside className="md:w-1/4">
          <ul className="space-y-6 text-slate-700 dark:text-slate-300 font-medium">
            {categories.map((cat) => (
              <li key={cat.id} className="flex items-center gap-2">
                <span className="text-sm font-mono text-slate-500">
                  [{cat.id}]
                </span>
                <span className="tracking-wide">{cat.label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Cards Section */}
        <div className="md:w-3/4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.link}
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  ↳ Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// components/PartnershipsSection.tsx