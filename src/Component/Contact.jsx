import React, { useEffect, useRef } from 'react';

// Placeholder icons (in a real app, you'd use a library like lucide-react)
const SendIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
    <path d="m21.854 2.147-10.94 10.939"></path>
  </svg>
);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white font-sans py-16">

      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.8s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0px);
        }
      `}</style>

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto fade-in-up">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-24 h-24 rounded-full bg-gradient-to-r 
                from-purple-500/20 to-blue-500/20 blur-3xl"></div>

            <span className="text-8xl md:text-[10rem] font-extrabold 
              bg-gradient-to-r from-white/10 via-white/5 to-white/2 
              bg-clip-text text-transparent select-none tracking-tighter">
              CONTACT
            </span>

            <h2 className="absolute text-4xl md:text-6xl font-bold bg-clip-text 
              text-transparent bg-gradient-to-r from-white/90 to-gray-300">
              Contact
            </h2>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 my-6 fade-in-up">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>

          <p className="fade-in-up text-base md:text-lg tracking-wider text-gray-300 uppercase 
            max-w-md text-center font-light">
            GET IN TOUCH
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center fade-in-up">
            <h3 className="text-3xl font-bold text-white mb-6">Let's work together</h3>

            <p className="text-gray-300 mb-4">I'm available for full-time roles & freelance projects.</p>
            <p className="text-gray-300 mb-4">My inbox is always open, whether you have a question or just want to say hi.</p>
            <p className="text-gray-300 mb-8">I'll try my best to get back to you!</p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:chetanpatil0104@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 
                bg-purple-600/20 hover:bg-purple-600/30 
                text-purple-300 rounded-lg border border-purple-500/30
                transition-all duration-300"
              >
                <SendIcon className="w-4 h-4" />
                <span>chetanpatil0104@gmail.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative fade-in-up">

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

        </div>
      </div>
    </section>
  );
};

export default Contact;
