import React from 'react';

const testimonials = [
    {
        name: "John Doe",
        feedback: "The best cafe experience I've ever had!",
    },
    {
        name: "Jane Smith",
        feedback: "Amazing coffee and a cozy atmosphere.",
    },
    {
        name: "Alice Johnson",
        feedback: "I love the variety of pastries available!",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
                <div className="flex flex-wrap justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="max-w-xs mx-4 mb-6 p-4 bg-white rounded-lg shadow-md">
                            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                            <p className="mt-2 font-semibold text-gray-800">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;