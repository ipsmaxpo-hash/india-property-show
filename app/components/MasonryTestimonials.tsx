// "use client";

// import React from "react";

// // Sample testimonials data
// const testimonials = [
//   {
//     id: 1,
//     feedback:
//       "This event exceeded my expectations! The opportunities for networking were incredible.",
//     name: "John Doe",
//     role: "CEO, InnovateTech",
//   },
//   {
//     id: 2,
//     feedback:
//       "I was inspired by the sessions and the level of professionalism displayed throughout.",
//     name: "Jane Smith",
//     role: "Marketing Director, BizWorld",
//   },
//   {
//     id: 3,
//     feedback:
//       "The event was a fantastic blend of learning and connecting with industry leaders.",
//     name: "Michael Johnson",
//     role: "Entrepreneur",
//   },
//   {
//     id: 4,
//     feedback:
//       "An unforgettable experience! I can't wait to join the next edition.",
//     name: "Emily Clark",
//     role: "Product Manager, TechWave",
//   },
//   {
//     id: 5,
//     feedback:
//       "The attention to detail and organization was top-notch. Highly recommended!",
//     name: "Chris Evans",
//     role: "Investor",
//   },
//   {
//     id: 6,
//     feedback:
//       "Such an engaging and rewarding event. I made valuable connections.",
//     name: "Samantha Lee",
//     role: "Consultant",
//   },
// ];

// const MasonryTestimonials: React.FC = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-6 sm:px-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12 text-center">
//           Testimonials
//         </h2>

//         {/* Masonry Grid */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white shadow-lg rounded-lg p-6 break-inside-avoid hover:shadow-xl transition-shadow duration-300"
//             >
//               <p className="text-gray-600 italic mb-4">
//                 "{testimonial.feedback}"
//               </p>
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-sm text-gray-500">{testimonial.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MasonryTestimonials;
