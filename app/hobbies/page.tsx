"use client";

import { Card, CardContent } from "../../components/ui/card";
import { Film, Utensils, Waves, BookOpen } from "lucide-react";

const hobbies = [
    {
        icon: Film,
        title: "Watching Movies",
        description: "I love watching movies specially anime or horror movies it makes me feel more relax",
    },
    {
        icon: Utensils,
        title: "Eating Good Food",
        description: "Trying delicious food and enjoying tasty meals that bring me so much comfort.",
    },
    {
        icon: Waves,
        title: "Going to the Beach",
        description: "I love the beach walking by the shore, feeling the breeze, and watching the waves.",
    },
    {
        icon: BookOpen,
        title: "Reading",
        description: "Reading books helps me learn new things and explore amazing worlds.",
    },
];

export default function HobbiesPage() {
    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                        Things I Love
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        My <span className="text-yellow-500">Hobbies & Interests</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        A few things I truly love doing outside of coding
                    </p>
                </div>

                {/* Hobbies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hobbies.map((hobby) => {
                        const Icon = hobby.icon;
                        return (
                            <Card
                                key={hobby.title}
                                className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                                            <Icon className="h-8 w-8 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 mt-2 mb-3">
                                                {hobby.title}
                                            </h3>
                                            <p className="text-slate-600 text-lg leading-relaxed">
                                                {hobby.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Footer Quote */}
                <p className="mt-16 text-slate-400 italic text-lg text-center">
                    "Enjoying life and finding inspiration everywhere"
                </p>

            </div>
        </div>
    );
}
