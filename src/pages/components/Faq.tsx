import { useState } from 'react';

interface FAQAccordionProps {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const faqAccordionInfo: FAQAccordionProps[] = [
    {
      question: 'Q. 학교를 너무 오래 다니시는데 졸업은 언제 하시나요?',
      answer:
        '앞으로 1년~1년반 남았습니다! 그때까지 여러분이 저를 놀아주셔야 해요ㅎㅎ',
    },
    {
      question: 'Q. 이번학기 시간표가 어떻게 되시나요?',
      answer:
        '컴공에서는 자료구조, 알고리즘, 데이터베이스, AI와 법을 듣고, 국문과에서는 한국어방언학과 한국어의미론을 듣습니다. 그 외 시간에는 AI 연구원에서 주 15시간 근장을 합니다. 월-목 12:30~14:00에는 시간이 비니 점심 약속 잡아요!',
    },
    {
      question: 'Q. 구미는 마이구미인가요?',
      answer: '더욱 참신한 개그를 연습해오세요!',
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
        className={`transition-max-height duration-800 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="text-lg w-full text-left mt-4">{answer}</p>
      </div>
    </div>
  );
};
