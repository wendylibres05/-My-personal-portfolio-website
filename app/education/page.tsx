import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationList = [
    {
        degree: "Master in Information Technology",
        institution: "University of the Philippines",
        description: "Focused on software engineering, data structures, algorithms, and web development.",
    },
    {
        degree: "BS in Information Technology",
        institution: "University of Nueva Caceres",
        description: "Student program covering React, Node.js, databases, and deployment.",
        achievements: ["Built 3 full-stack applications", "Team Code Reviewer"],
    },
    {
        degree: "High School Diploma",
        institution: "Pamukid National High School",
        period: "2024 - 2025",
        description: "Basic computer programming fundamentals, HTML, CSS, and JavaScript.",
        achievements: ["Built 3 full-stack applications", "Team Code Reviewer"],
    },
];

export default function Education() {
    return (
        <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Education</h1>
                <p className="text-lg text-muted-foreground">Academic background and formal training.</p>
            </div>

            <div className="space-y-6">
                {educationList.map((item, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex items-start gap-3">
                                <GraduationCap className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                                    <CardDescription className="text-base mt-1">
                                        {item.institution}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-3">{item.description}</p>
                            {item.period && (
                                <p className="text-sm font-medium text-foreground/70 mb-2">
                                    {item.period}
                                </p>
                            )}
                            {item.achievements && (
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold">Key Highlights</p>
                                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                        {item.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
