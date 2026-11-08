"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { GraduationCap, BookOpen, School, Award } from "lucide-react";

const education = [
    {
        icon: School,
        title: "Elementary School",
        description: "Completed my elementary education with enthusiasm and curiosity, building the foundation for learning.",
        color: "from-blue-50 to-blue-100",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        icon: BookOpen,
        title: "High School",
        description: "Developed strong study habits and discovered my passion for technology and computers.",
        color: "from-emerald-50 to-emerald-100",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
    },
    {
        icon: GraduationCap,
        title: "College / Senior High",
        description: "Currently pursuing my studies, focusing on programming and software development.",
        color: "from-indigo-50 to-indigo-100",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
    },
    {
        icon: Award,
        title: "Skills & Certifications",
        description: "Learning web development with Next.js, NestJS, and modern tools — growing every day.",
        color: "from-purple-50 to-purple-100",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
];

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        My Education & Journey
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Where I learned, grew, and discovered my passion for technology
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Cards Grid — Same as Hobbies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Card
                                key={item.title}
                                className={`border-0 shadow-md bg-gradient-to-br ${item.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden`}
                            >
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-4">
                                        <div className={`${item.iconBg} p-3 rounded-xl`}>
                                            <Icon className={`h-7 w-7 ${item.iconColor}`} />
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-slate-800">
                                            {item.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-lg leading-relaxed mt-2">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-16">
                    <p className="text-slate-500 italic text-lg">
                        "Education is the foundation, curiosity is the guide"
                    </p>
                </div>
            </div>
        </div>
    );
}
