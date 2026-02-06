import React from "react";

const SendIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
        <path d="m21.854 2.147-10.94 10.939"></path>
    </svg>
);

const ContactForm = () => {
    return (
        <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>

            <div className="relative p-8 rounded-2xl bg-black/50 backdrop-blur-sm 
        border border-white/10 shadow-xl">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-sm text-gray-300">Your Name</label>
                            <input
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 
                rounded-lg focus:outline-none focus:ring-2 
                focus:ring-purple-500/50 text-white placeholder-gray-500"
                                type="text"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="text-sm text-gray-300">Your Email</label>
                            <input
                                id="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 
                rounded-lg focus:outline-none focus:ring-2 
                focus:ring-purple-500/50 text-white placeholder-gray-500"
                                type="email"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
                        <input
                            id="subject"
                            placeholder="Project Inquiry"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 
              rounded-lg focus:outline-none focus:ring-2 
              focus:ring-purple-500/50 text-white placeholder-gray-500"
                            type="text"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="message" className="text-sm text-gray-300">Message</label>
                        <textarea
                            id="message"
                            placeholder="Hello, I'd like to discuss a project..."
                            rows="5"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 
              rounded-lg focus:outline-none focus:ring-2 
              focus:ring-purple-500/50 text-white placeholder-gray-500 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 
            hover:from-purple-700 hover:to-purple-900 
            text-white font-medium rounded-lg flex items-center justify-center gap-2"
                    >
                        <SendIcon className="w-5 h-5" />
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
export { SendIcon };
