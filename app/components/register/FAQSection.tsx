'use client'

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How can I register for the event?',
      answer: 'You can register by filling out the registration form above. Once you submit your details, you will receive a confirmation email with your registration details.',
    },
    {
      question: 'Is there any registration fee?',
      answer: 'The registration for the event is free. However, there might be fees for specific workshops or networking sessions, which will be mentioned during the registration process.',
    },
    {
      question: 'What if I need to cancel my registration?',
      answer: 'You can cancel your registration anytime by clicking on the cancellation link provided in your confirmation email or by contacting our support team.',
    },
    {
      question: 'Can I register on the day of the event?',
      answer: 'Yes, you can register on the day of the event, but we recommend registering early to save time and guarantee your spot.',
    },
    {
      question: 'Will I get a certificate after attending the event?',
      answer: 'Yes, attendees will receive a certificate of attendance after the event. The certificate will be sent to your email address post-event.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-12">
          Here are some common questions about the registration process. If you have any other questions, feel free to reach out to us!
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left bg-gray-100 text-gray-800 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
