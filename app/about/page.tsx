"use client";

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

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-4">My Skills</h1>
            <p className="text-gray-600 mb-6">Technologies I've been working with</p>

            <div className="grid gap-4 md:grid-cols-2">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 border rounded-lg"
                    >
                        <span className="font-medium">{skill.name}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded text-sm">{skill.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
