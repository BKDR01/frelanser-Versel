import React, { useState } from "react";

const MyPortfolio = () => {
    const portfolioItems = [
        { id: 1, title: "Graphic Art - For wolkovrian", image: "https://picsum.photos/300/200?random=1" },
        { id: 2, title: "Online Wallet App", image: "https://picsum.photos/300/200?random=2" },
        { id: 3, title: "Illustration", image: "https://picsum.photos/300/200?random=3" },
        { id: 4, title: "Landing Page Design", image: "https://picsum.photos/300/200?random=4" },
        { id: 5, title: "Mobile App UI", image: "https://picsum.photos/300/200?random=5" },
    ];

    const skills = [
        "User Interface Design",
        "Graphics Design",
        "Logo Design",
        "Animation",
        "Branding",
        "3D Modelling",
        "Video Editing",
    ];

    const [showAllPortfolio, setShowAllPortfolio] = useState(false);
    const [showAllSkills, setShowAllSkills] = useState(false);

    const displayedPortfolio = showAllPortfolio ? portfolioItems : portfolioItems.slice(0, 3);
    const displayedSkills = showAllSkills ? skills : skills.slice(0, 5);

    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-4 sm:p-6">
            {/* My Portfolio */}
            <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 shadow p-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">My Portfolio</h2>
                    <button className="text-red-500 border border-red-500 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition">
                        Edit Portfolio
                    </button>
                </div>

                {/* Portfolio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {displayedPortfolio.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer bg-gray-50"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-32 object-cover"
                            />
                            <p className="p-2 text-sm font-medium">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-3">
                    <button
                        onClick={() => setShowAllPortfolio(!showAllPortfolio)}
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {showAllPortfolio ? "Show Less" : "View All"}
                    </button>
                </div>
            </div>

            {/* Top Skills */}
            <div className="bg-white rounded-lg border border-gray-200 shadow p-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Top Skills</h2>
                    <button className="text-red-500 border border-red-500 px-3 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition">
                        Edit Skills
                    </button>
                </div>

                <ul className="space-y-2">
                    {displayedSkills.map((skill, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                            {skill}
                        </li>
                    ))}
                </ul>

                <div className="mt-3">
                    <button
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        className="text-blue-600 text-sm hover:underline"
                    >
                        {showAllSkills ? "Show Less" : "See more"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
