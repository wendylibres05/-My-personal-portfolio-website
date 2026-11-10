"use client";

import { Card, CardContent } from "../../components/ui/card";
import { BookOpen } from "lucide-react";

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">

                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                        <span></span>
                        <span>My Studies</span>
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        My <span className="text-yellow-500">Education</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Where I learned, grew my curiosity, and discovered my love passion for technology
                    </p>
                </div>

                {/* Education Card */}
                <Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-10">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
                                <BookOpen className="h-10 w-10 text-yellow-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                    High School Graduate "General Academic Strand"
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto">
                                    Completed my high school education with enthusiasm and curiosity. It was there I developed strong study habits and first discovered my passion for computers and technology.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quote */}
                <p className="mt-16 text-slate-400 italic text-lg">
                    "Education is the foundation, curiosity is the guide"
                </p>

            </div>
        </div>
    );
}
