
import React from 'react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Owner, Zen Flow Studio",
    image: "👩‍🦰",
    quote: "FlowTime transformed our booking process completely. We went from spending hours on scheduling to having everything automated. Our clients love the seamless booking experience, and we've seen a 40% increase in class attendance since switching.",
    studio: "San Francisco, CA"
  },
  {
    name: "Marcus Rodriguez",
    role: "Director, Mindful Movement",
    image: "👨‍🦲",
    quote: "The payment integration and package management features are game-changers. We can now offer flexible membership options and handle billing automatically. Our revenue has increased by 30% while reducing our admin workload significantly.",
    studio: "Austin, TX"
  },
  {
    name: "Emma Thompson",
    role: "Founder, Breathe Pilates",
    image: "👩‍🦱",
    quote: "As someone who runs multiple locations, FlowTime's multi-studio support and staff management tools are essential. The mobile app keeps me connected to all my studios, and the analytics help me make better business decisions.",
    studio: "Portland, OR"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-50 to-blue-50" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Poppins']">
            Loved by
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Studio Owners
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Lato']">
            See how FlowTime is helping wellness professionals grow their businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 font-['Poppins']">{testimonial.name}</h4>
                  <p className="text-purple-600 font-medium font-['Poppins']">{testimonial.role}</p>
                  <p className="text-sm text-gray-500 font-['Lato']">{testimonial.studio}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic leading-relaxed font-['Lato']">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <span className="text-gray-600 font-['Lato']">Join</span>
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-['Poppins']">
              5,000+
            </span>
            <span className="text-gray-600 font-['Lato']">happy studio owners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
