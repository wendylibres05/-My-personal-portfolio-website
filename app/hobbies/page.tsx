import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Gamepad2, Music, Dumbbell, MapPin, BookOpen } from "lucide-react";

const hobbies = [
    {
        icon: Camera,
        title: "Photography",
        description: "Capturing street landscapes and urban architecture during evening walks.",
    },
    {
        icon: Gamepad2,
        title: "Gaming",
        description: "Enthusiast for strategy and RPG games.",
    },
    {
        icon: Music,
        title: "Music & Guitar",
        description: "Playing acoustic guitar and exploring indie rock music.",
    },
    {
        icon: Dumbbell,
        title: "Fitness & Running",
        description: "Staying active through regular workout sessions and weekend runs.",
    },
    {
        icon: MapPin,
        title: "Travel & Hiking",
        description: "Exploring national parks, hiking trails, and new places.",
    },
    {
        icon: BookOpen,
        title: "Reading",
        description: "Fascinated by tech history and sci-fi novels.",
    },
];

export default function Hobbies() {
    return (
        <div className="min-h-screen py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-tight">Hobbies & Interests</h1>
                <p className="text-lg text-muted-foreground">A few things I enjoy outside of coding :)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.map((hobby) => {
                    const Icon = hobby.icon;
                    return (
                        <Card key={hobby.title} className="hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Icon className="h-5 w-5 rounded-lg text-primary" />
                                    <CardTitle className="text-xl">{hobby.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{hobby.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
