import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    quote: 'I have been a loyal customer of ApoteCare for years. Their products are top-notch and the service is excellent!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    quote: 'ApoteCare has helped me manage my health needs effectively. I highly recommend them!',
  },
  {
    id: 3,
    name: 'Michael Brown',
    quote: 'I am impressed with the professionalism and dedication of ApoteCare\'s staff. They go above and beyond to assist their customers.',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    quote: 'The products offered by ApoteCare are of superior quality. I am a satisfied customer and will continue to rely on them for my health needs.',
  },
  {
    id: 5,
    name: 'David Wilson',
    quote: 'ApoteCare provides excellent customer service. They are always helpful and knowledgeable about their products.',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <p className="text-lg font-semibold text-blue-600">{testimonial.name}</p>
              </div>
              <p className="text-gray-800">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
