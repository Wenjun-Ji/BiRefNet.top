import React, { useState } from 'react';

const Answer: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How to remove background from picture?",
      answer:
        "Simply upload the image and let the app do the work for you! Photoroom uses AI to automatically delete the background from your photo, allowing you to easily customize and edit your images for free.",
    },
    {
      question: "Can I remove the background on my phone?",
      answer:
        "Yes, you can either remove the background on your phone with the Photoroom in your browser or with the Photoroom app. The app is available for both iOS and Android devices, allowing you to easily edit and customize your images on-the-go.",
    },
    {
      question: "Is the background remover tool free?",
      answer:
        "Yes, the background remover tool from Photoroom is completely free to use. You can upload your images and remove their backgrounds without any cost or limitations.",
    },
    {
      question: "How can I change the background color?",
      answer:
        "Upload the photo of your choice and then click on the different color options. You can choose between colors that we pre-select for you or choose your own unique color.",
    },
    {
      question: "Who can benefit from using the background remover tool?",
      answer:
        "Whether you are a social media manager, marketer, or entrepreneur, the Background Remover tool can transform the way you create visuals for your business or personal projects. This tool offers a range of benefits, such as helping users to create stunning visuals, save time, and streamline their creative process.",
    },
    {
      question: "Why is it important to remove the background of product pictures?",
      answer:
        "Removing the background from product pictures enhances the focus on the product, maintains consistency and branding, provides versatility for marketing materials, allows for contextual flexibility, facilitates product comparison, and improves the overall aesthetics of your product listings.",
    },
  ];

  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-6 p-6">
      <div className="mx-auto flex flex-col items-center gap-3 text-center max-w-[384px] sm:max-w-lg lg:max-w-[640px]">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">You asked, we answered</h2>
      </div>
      <ul className="mt-8 w-full max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <li key={index} className="group/faq-item border-b border-solid border-gray-300 first:border-t">
            <div
              className="flex cursor-pointer flex-row justify-between gap-4 py-6"
              onClick={() => toggleFAQ(index)}
            >
              <div className="pt-1 sm:pt-0 w-full max-w-[760px]">
                <p className="text-lg font-semibold sm:text-xl break-words">{faq.question}</p>
              </div>
              <button
                type="button"
                className={`relative overflow-hidden inline-flex items-center justify-center text-center appearance-none rounded-full outline-none transition-all duration-300 max-w-full truncate focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed ${openIndexes.includes(index) ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-400 focus-visible:bg-gray-400 active:bg-gray-500 focus-visible:ring-indigo-500'} text-black disabled:opacity-30 h-8 w-8 flex-shrink-0`}
                style={{ transition: 'background-color 0.3s ease-in-out' }}
              >
                <div className={`flex items-center justify-center w-10 h-10 transform transition-transform duration-300 ease-in-out ${openIndexes.includes(index) ? 'rotate-45 text-white' : 'rotate-0 text-black'}`}
                     style={{ transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                      d="M19 11H13V5c0-.265-.105-.52-.293-.707-.187-.187-.442-.293-.707-.293-.265 0-.52.106-.707.293-.187.187-.293.442-.293.707v6H5c-.265 0-.52.106-.707.293-.187.187-.293.442-.293.707 0 .265.106.52.293.707C4.48 13 4.735 13 5 13h6v6c0 .265.106.52.293.707.187.187.442.293.707.293.265 0 .52-.106.707-.293.187-.187.293-.442.293-.707v-6h6c.265 0 .52-.106.707-.293.187-.187.293-.442.293-.707 0-.265-.106-.52-.293-.707C19.52 11.106 19.265 11 19 11z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndexes.includes(index) ? 'max-h-96' : 'max-h-0'}`} style={{ transition: 'max-height 0.3s ease-in-out' }}>
              <div className="py-4 w-full max-w-[760px]">
                <span className="block text-gray-600 break-words">
                  {faq.answer}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answer;
