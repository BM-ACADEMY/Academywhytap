import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

// Importing assets for student photos
import yogarajPhoto from '../../../../../assets/kamar1.png';
import sindhuPhoto from '../../../../../assets/class/class3.png';
import shabbuPhoto from '../../../../../assets/kamar2.png';
import fazilPhoto from '../../../../../assets/avatar.png';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Yogaraj",
            role: "Digital Marketing Executive",
            heading: "Best IT Training Institute",
            content: "I joined the PG in Digital Marketing course at WHY TAP when I had no clear idea about my future. I had just taken over my father's business and didn't know what direction to go in. Before joining, I had zero knowledge about digital marketing. But WHY TAP made it easy to understand and grow. Their live projects, expert mentors, and practical learning helped me build real skills. Now, I'm placed as a Digital Marketing Executive at JP Finance, and all the credit goes to WHY TAP for shaping my journey. Great learning experience.",
            rating: 5,
            image: yogarajPhoto
        },
        {
            id: 2,
            name: "Mohamed Fazil",
            role: "Full Stack Developer",
            heading: "Exceeded Expectations",
            content: "My journey with WHY TAP as a MERN stack developer student has been truly life-changing. I came in with the goal of starting a career in tech, and this course gave me everything I needed — strong fundamentals, hands-on project work, and real mentorship. Thanks to the support and training, I'm now placed and excited to start my dream career in web development. Grateful to the WHY TAP team for guiding me every step of the way.",
            rating: 5,
            image: fazilPhoto
        },
        {
            id: 3,
            name: "Sindhu Sindhuja",
            role: "Data Analyst",
            heading: "Excellent Learning Experience",
            content: "I enrolled in a Data Analyst course in Pondicherry at BM Academy, and it was an excellent learning experience. My mentor Arshad explained each topic clearly and provided real-time examples to enhance our understanding. He also supported us with projects, which boosted my confidence a lot. My mentor were very friendly and helpful, and the class schedules were flexible. After completing the course, I feel well-prepared to apply for jobs. I'm really glad I chose BM Academy 🥳",
            rating: 5,
            image: sindhuPhoto
        },
        {
            id: 4,
            name: "Shabbu Sala",
            role: "Full Stack Developer",
            heading: "Hands-on Practical Training",
            content: "I really like BM Academy. I joined the FSD (Full Stack Development) course, and it has been extremely useful for me. My trainer taught very well and explained every concept clearly. She patiently clarified all my doubts and provided multiple real-time tasks, which helped me gain strong practical knowledge. The hands-on training and guidance improved my confidence significantly. Because of this training at BM Academy, I am now able to attend interviews confidently.",
            rating: 5,
            image: shabbuPhoto
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

  return (
    <section className="bg-white py-16 px-4 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow (Dimmed New Color) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-[#2a9b87]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="text-[#2a9b87]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#05243b]">
            Reviews from Our <span className="text-[#2a9b87]">Successful Students</span>
          </h2>
        </div>
        <p className="text-gray-600 mb-12">
          See how our AI-powered IT training institute has helped students succeed.
        </p>

        {/* Testimonial Card Container */}
        <div className="relative bg-gradient-to-b from-slate-50 to-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 max-w-5xl mx-auto overflow-hidden group">
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            
            {/* Student Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                {/* Dimmed background accent using new color #2a9b87 */}
                <div className="absolute -inset-2 bg-[#2a9b87]/15 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="relative rounded-2xl w-64 h-72 object-cover shadow-md border-4 border-white transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="w-full md:w-2/3 relative">
              {/* Decorative quote icon - Dimmed version */}
              <Quote className="absolute top-0 right-0 w-20 h-20 text-[#2a9b87]/10 opacity-40 pointer-events-none" />
              
              <div className="flex mb-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#e8be66] text-[#e8be66]" />
                ))}
              </div>
              
              <h3 className="italic text-xl font-bold text-gray-800 mb-4">"{testimonials[currentIndex].heading}"</h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                {testimonials[currentIndex].content}
              </p>

              <div>
                <h4 className="font-bold text-[#2a9b87] text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <span 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === i ? 'bg-[#2a9b87] w-6' : 'bg-slate-200 hover:bg-slate-300'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;