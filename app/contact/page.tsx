import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                <p className="text-lg text-muted-foreground">Have a project in mind? Let's work together!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-6">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                            <Mail className="h-5 w-5 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-muted-foreground">wendy@email.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                            <Phone className="h-5 w-5 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+63 912 345 6789</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 text-primary mt-1" />
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-muted-foreground">Naga City, Camarines Sur, Philippines</p>
                            </div>
                        </div>
                    </CardContent>
                </div>

                {/* Contact Form */}
                <CardContent className="p-6">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg border bg-background"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 rounded-lg border bg-background"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full p-3 rounded-lg border bg-background"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                className="w-full p-3 rounded-lg border bg-background min-h-[120px]"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity"
                        >
                            Send Message
                        </button>
                    </form>
                </CardContent>
            </div>
        </div>
    );
}
