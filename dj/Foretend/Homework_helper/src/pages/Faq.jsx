import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Solvera",
      answer:
        "Solvera is a online Home work helper platform",
    },
    {
      question: "What are the  features of Solvera",
      answer:
        "Solvera is a Online home work solver platform where students can ask and queris the doubt from easy platform",
    },
    {
      question: "How to contact solvera Support ?", 
      answer:
        " Send an email to the support team at their designated support email address.Support@solvera.com",
    },
   
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-6 p-7 text-white py-8">
      <h1 className="text-3xl font-bold mb-4">FAQs</h1>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full focus:outline-none"
            >
              <h2 className="text-xl font-semibold">{faq.question}</h2>
            </button>
            {expandedIndex === index && (
              <p className="mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
