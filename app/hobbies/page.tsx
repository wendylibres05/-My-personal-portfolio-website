"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Film, Utensils, Waves, BookOpen } from "lucide-react";

const hobbies = [
    {
        icon: Film,
        title: "Watching Movies",
        description: "I love watching movies — it's my favorite way to relax and enjoy wonderful stories.",
        emoji: "🎬",
        color: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        icon: Utensils,
        title: "Eating Good Food",
        description: "Trying delicious food and enjoying tasty meals brings me so much joy.",
        emoji: "🍽️",
        color: "from-orange-50 to-orange-100",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },
    {
        icon: Waves,
        title: "Going to the Beach",
        description: "I love the beach — walking by the shore, feeling the breeze, and watching the waves.",
        emoji: "🏖️",
        color: "from-cyan-50 to-cyan-100",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
    },
    {
        icon: BookOpen,
        title: "Reading",
        description: "Reading books helps me learn new things and explore amazing worlds.",
        emoji: "📖",
        color: "from-purple-50 to-purple-100",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
];

export default function HobbiesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        My Hobbies & Interests ✨
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        A few things I truly love doing outside of coding 💛
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {hobbies.map((hobby) => {
                        const Icon = hobby.icon;
                        return (
                            <Card
                                key={hobby.title}
                                className={`border-0 shadow-lg bg-gradient-to-br ${hobby.color} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden`}
                            >
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-4">
                                        <div className={`${hobby.iconBg} p-3 rounded-xl`}>
                                            <Icon className={`h-7 w-7 ${hobby.iconColor}`} />
                                        </div>
                                        <div>
                                            <span className="text-3xl">{hobby.emoji}</span>
                                            <CardTitle className="text-2xl font-bold text-gray-800 mt-1">
                                                {hobby.title}
                                            </CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-lg leading-relaxed mt-2">
                                        {hobby.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="text-center mt-16">
                    <p className="text-gray-500 italic text-lg">
                        "Enjoying life and finding inspiration everywhere" 🌿
                    </p>
                </div>
            </div>
        </div>
    );
}
