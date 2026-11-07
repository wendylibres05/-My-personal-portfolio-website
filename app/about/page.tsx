import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Basic" },
    { name: "Next.js", level: "Basic" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "TypeScript", level: "Basic" },
    { name: "Node.js", level: "Basic" },
    { name: "NestJS", level: "Basic" },
];

export default function About() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-lg text-muted-foreground">
                        A curiosity developer that finds a better solution to creat a functional and accessible web experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Hirap na Hirap na ako:< */}
                    <Card>
                        <CardHeader>
                            <CardTitle>My Story</CardTitle>
                            <CardDescription>Get to know me better</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, harum!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquid!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptas?
                            </p>
                        </CardContent>
                    </Card>

                    {/* Skills Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Skills & Technologies</CardTitle>
                            <CardDescription>Tools I use to build amazing things</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
