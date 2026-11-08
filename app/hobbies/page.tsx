"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Film, Utensils, Waves, BookOpen } from "lucide-react";

const hobbies = [
    {
        icon: Film,
        title: "Watching Movies",
        description: "I love watching movies — it's one of my favorite ways to relax and enjoy great stories.",
    },
    {
        icon: Utensils,
        title: "Eating Good Food",
        description: "Trying delicious food and enjoying tasty meals brings me so much happiness.",
    },
    {
        icon: Waves,
        title: "Going to the Beach",
        description: "I love the beach — walking by the shore, feeling the breeze, and watching the waves.",
    },
    {
        icon: BookOpen,
        title: "Reading",
        description: "Reading books helps me learn new things and explore wonderful worlds.",
    },
];

export default function HobbiesPage() {
    return (
        <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">My Hobbies & Interests</h1>
                <p className="text-lg text-gray-500">A few things I truly love doing :)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hobbies.map((hobby) => {
                    const Icon = hobby.icon;
                    return (
                        <Card key={hobby.title} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Icon className="h-5 w-5 text-blue-600" />
                                    <CardTitle className="text-xl">{hobby.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500">{hobby.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
