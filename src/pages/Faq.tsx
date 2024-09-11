import { useState } from 'react';

interface FAQAccordionProps {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const faqAccordionInfo: FAQAccordionProps[] = [
    {
      question: 'Q. 학교를 너무 오래 다니시는데 졸업은 언제 하시나요?',
      answer: '1년~1년반 남았습니다ㅎㅎ 그때까지 여러분이 저를 놀아주셔야 돼요',
    },
    {
      question: 'Q. 침착맨 입문 영상으로 무엇을 추천하시나요?',
      answer: 'TBD',
    },
    {
      question: 'Q. 구미하면 마이구미인가요?',
      answer: 'TBD',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-[80px] ">
      {faqAccordionInfo.map((accordion) => (
        <FAQAccordion
          key={accordion.question}
          question={accordion.question}
          answer={accordion.answer}
        />
      ))}
    </div>
  );
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-xl px-[50px] py-10 mobile:px-[20px] mobile:py-3 shadow-xl w-full gap-5 bg-yellow-100">
      <div className="flex justify-between items-center gap-5">
        <p className="text-xl font-bold truncate mobile:text-wrap mobile:text-left">
          {question}
        </p>
        <button
          className="rounded-full shadow-md transition border border-[#D3D3D3]"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            className={`transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
      <div
        className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="text-lg w-full text-left mt-4">{answer}</p>
      </div>
    </div>
  );
};
