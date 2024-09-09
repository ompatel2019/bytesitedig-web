import React, { useState } from 'react'; // Corrected import statement
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null); // Track the active question
  
  const faqs = [
    {
      question: "How do I know if a website is right for my company?",
      answer: "If you are a business looking to expand and scale, a website is the perfect solution. You can showcase your services to everyone on the internet and gain credibility, as consumers will see you as a more legitimate and accessible entity."
    },
    {
      question: "How do you determine the exact price of my website?",
      answer: "The cost of a standard 1-page, custom-made website that is responsive on all platforms is $899. If you wish to add more pages, the price increases to $1299, which is extremely competitive compared to other businesses offering similar services."
    },
    {
      question: "What is included in the website maintenance service?",
      answer: "Our maintenance service is absolutely free. Unlike generic website builders that often require subscriptions, our custom-coded solutions typically face fewer issues. Maintenance includes adding minor content, updating existing content, adding images, changing text, and adjusting colors. Please note, adding major sections or overhauls is not covered under the maintenance service and may incur additional costs."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "The development of a website depends on the client as well, depending on how quickly they review designs and provide feedback. If a client is responsive, a website can most definitely be finished within 2 weeks."
    },
    {
      question: "What technologies do you use to build websites?",
      answer: "We use modern and scalable technologies including HTML5, CSS3, JavaScript, and popular frameworks like React for frontend development, This ensures your website is efficient, responsive, and capable of evolving with your business."
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index); // Toggle or close if already open
  };

  return (
    <div id='faq' className='2xl:px-[160px] 2xl:py-[56px] 2xl:pb-[16px] xl:px-[96px] lg:px-[72px] md:px-[24px] sm:px-[16px] max-sm:px-[16px] max-sm:py-[32px] py-[96px] lg:pb-[96px] bg-c2'>
      <h2 className='text-center font-medium font-dm-mono text-[#fafafa] text-h3 max-sm:text-h5 mb-2'>07 - FAQ</h2>
      <p className='font-dm-sans text-h4 max-sm:text-h7 font-medium text-[#fafafa] text-center'>Your questions, answered.</p>
      {faqs.map((faq, index) => (
        <div key={index} className='space-y-4 py-4'>
          <div className='font-questrial text-c4 w-full py-8 max-md:py-6 border-b-2 flex flex-col gap-4'>
            <div className='flex max-md:items-start justify-between'>
              <h3 className='text-h5 max-md:text-h7'>{index + 1}. {faq.question}</h3>
              <img onClick={() => toggleQuestion(index)} className='max-md:w-[20px] cursor-pointer' src={activeQuestion === index ? minus : plus} alt="toggle" />
            </div>
            {activeQuestion === index && (
              <div>
                <p className='text-h6 max-md:text-[12px] mb-4 max-md:mb-2'>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
