"use client";

import { FaChurch, FaUsers, FaBriefcase, FaBook, FaMapMarkedAlt } from "react-icons/fa";

const impacts = [
    {
        since: "Since 2020, over",
        stat: "500+",
        description: "churches onboarded to the Church App",
        link: "Faith-Tech",
        icon: <FaChurch className="text-pink-300 w-12 h-12" />,
    },
    {
        since: "Across Africa, more than",
        stat: "10,000+",
        description: "active users engage with our platforms",
        link: "Digital Communities",
        icon: <FaUsers className="text-pink-300 w-12 h-12" />,
    },
    {
        since: "Empowering SMEs with",
        stat: "Digitized HR & Legal",
        description: "streamlined workflows for small businesses",
        link: "SME Tools",
        icon: <FaBriefcase className="text-pink-300 w-12 h-12" />,
    },
    {
        since: "Supporting education through",
        stat: "E-Learning",
        description: "platforms used by thousands of students",
        link: "EdTech",
        icon: <FaBook className="text-pink-300 w-12 h-12" />,
    },
    {
        since: "Driving civic innovation with",
        stat: "Community Mapping",
        description: "projects in Nairobi and beyond",
        link: "Civic Tech",
        icon: <FaMapMarkedAlt className="text-pink-300 w-12 h-12" />,
    },
];

export default function ImpactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                    📈 Our Impact
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Testimonial/Highlight */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
                            <p className="text-blue-700 font-semibold">Faith & Technology</p>
                            <h3 className="text-3xl font-bold text-slate-800">
                                Connecting 500+ Churches
                            </h3>
                            <p className="text-slate-600">
                                Our Church App empowers congregations across Africa with
                                digital tools for worship, giving, and community engagement.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg shadow-sm flex items-start gap-4">
                            <img
                                src="/impact-community.jpg"
                                alt="Community"
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div>
                                <p className="text-slate-700 italic">
                                    “With these tools, our ministry has been able to reach
                                    members far beyond our walls. It’s truly transformative.”
                                </p>
                                <p className="mt-2 text-sm font-semibold text-slate-800">
                                    – Pastor Grace, Nairobi
                                </p>
                                <a
                                    href="#"
                                    className="mt-3 inline-block text-blue-600 font-semibold hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Impact Stats */}
                    <div className="space-y-10">
                        {impacts.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center border-b border-slate-200 pb-6"
                            >
                                <div>
                                    <p className="text-slate-500 text-sm">{item.since}</p>
                                    <h3 className="text-3xl font-bold text-slate-800">
                                        {item.stat}
                                    </h3>
                                    <p className="text-slate-600">{item.description}</p>
                                    <a
                                        href="#"
                                        className="mt-2 inline-block text-blue-600 font-semibold hover:underline"
                                    >
                                        {item.link} →
                                    </a>
                                </div>
                                <div className="opacity-30">{item.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
