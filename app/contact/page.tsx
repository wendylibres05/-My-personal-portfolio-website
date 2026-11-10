import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white py-20 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-6">
                        Get Connected
                    </div>
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        Get In <span className="text-yellow-500">Touch</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">
                        Have a project in mind? Let's work together!
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Contact Info */}
                    <Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl overflow-hidden">
                        <CardContent className="p-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Email</h3>
                                        <p className="text-slate-500">wendy@email.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Phone</h3>
                                        <p className="text-slate-500">+63 991 732 9683</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800">Location</h3>
                                        <p className="text-slate-500">Pamukid Cadlum, San Fernando, Camarines Sur, Philippines</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Form */}
                    <Card className="border-0 shadow-md bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl overflow-hidden">
                        <CardContent className="p-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h2>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded-xl border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 rounded-xl border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded-xl border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        className="w-full p-3 rounded-xl border border-yellow-200 bg-white min-h-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl bg-yellow-400 text-slate-900 font-medium hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="h-4 w-4" />
                                    Send Me A Message
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer Quote */}
                <p className="mt-16 text-slate-400 italic text-lg text-center">
                    "Looking forward to hearing from you"
                </p>

            </div>
        </div>
    );
}
