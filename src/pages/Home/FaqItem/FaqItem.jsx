import React, { useState } from "react";
// import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { FaSquareTwitter, FaLocationArrow } from "react-icons/fa6";
const FaqItem = () => {
  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework...",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer: "You can install Tailwind CSS using npm or yarn...",
    },
    // Add more faqs as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {activeIndex === index ? (
                <FaSquareTwitter className="h-8 w-8 border border-white flex items-center justify-center" />
              ) : (
                <FaLocationArrow className="h-8 w-8" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqItem;
