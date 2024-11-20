import './../index.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FAQSection } from './components/Faq';

const FavPage: React.FC = () => {
  const navigator = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      <div className="w-full h-full flex flex-row justify-center items-center">
        {/* Tag */}
        <div className="flex flex-col justify-end">
          <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
            <div className="w-12 h-[23px]  bg-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"></div>
            <div
              className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"
              onClick={() => {
                navigator('/');
              }}
            >
              프로피일
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <div className="w-15 h-[23px]  bg-[#4694F0] drop-shadow-md translate-x-1.5 cursor-pointer"></div>
            <div
              className="w-15 h-28 border bg-white vertical-text text-center text-lg font-NPSfontBold font-black pl-2 text-[#4694F0] drop-shadow-lg translate-x-1.5 cursor-pointer"
              onClick={() => {
                navigator('/faq');
              }}
            >
              FAQ
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="bg-white text-black w-4/5 h-5/6 flex flex-col justify-center items-center rounded-xl drop-shadow-xl gap-4">
          <div className="w-11/12 h-16 cursor-default bg-gray-200 rounded-lg text-[#5C5C5C] text-lg font-semibold font-PretendardRegular flex justify-center items-center">
            저에게 자주 여쭤보시는 질문들을 모아봤습니다!
          </div>
          <div className="w-[90%] h-[480px] pb-8 m-4 overflow-y-scroll  justify-center place-items-center gap-y-2">
            <FAQSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavPage;
