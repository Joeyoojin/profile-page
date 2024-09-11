import './../index.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import me from '../assets/me.jpg';
import InputBox from './components/InputBox';
import TitleBox from './components/TitleBox';

// Props의 타입을 정의
interface TitleContentProps {
  title: string;
  contents: string;
}

const TitleContent: React.FC<TitleContentProps> = ({ title, contents }) => {
  return (
    <div className="relative h-10 flex flex-row gap-4 my-6">
      <TitleBox title={title} />
      <InputBox contents={contents} />
    </div>
  );
};

const IntroPage: React.FC = () => {
  const navigator = useNavigate();

  const handleNavigation = (path: string) => {
    navigator(path);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2]">
      <div className="w-full h-full flex flex-row justify-center items-center">
        {/* Tag */}
        <div className="flex flex-col justify-end">
          <div className="flex flex-col mb-6">
            <div className="w-15 h-[23px] bg-[#4694F0] drop-shadow-md translate-x-1.5 cursor-pointer"></div>
            <div className="w-15 h-28 border bg-white vertical-text text-center text-lg font-NPSfontBold font-black pl-2 text-[#4694F0] drop-shadow-lg translate-x-1.5 cursor-pointer">
              프로필
            </div>
          </div>

          <div className="flex flex-col ml-2 mb-6 hover:-translate-x-2">
            <div className="w-12 h-[23px] bg-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"></div>
            <div
              className="w-12 h-28 border bg-white vertical-text text-center text-lg font-extrabold font-NPSfontBold pl-2 text-[#7B8086] drop-shadow-md translate-x-2 cursor-pointer"
              onClick={() => {
                handleNavigation('/faq');
              }}
            >
              FAQ
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="bg-white text-black w-4/5 h-5/6 flex flex-row justify-center items-center rounded-xl drop-shadow-xl gap-20 px-20">
          <div className="w-[387px] h-4/5 relative">
            {/* 파란색 배경 */}
            <div className="w-full h-full absolute bg-[#dcecff] rounded-2xl shadow border border-[#acabc2]" />

            {/* 사진 추가 */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ">
              <img
                src={me}
                alt="profile image"
                className="w-80 h-80 rounded-full object-cover"
              />
            </div>

            {/* 하얀색 하단 영역 */}
            <div className="w-full h-1/3 absolute bottom-0 bg-white rounded-b-2xl border border-[#acabc2] flex justify-center items-center gap-2">
              <div className="flex flex-col justify-center items-center text-black text-xl font-extrabold">
                <div>조유진</div>
              </div>
            </div>
          </div>

          <div className=" relative flex-grow">
            <TitleContent title="학번" contents="19학번" />
            <TitleContent
              title="소속"
              contents="자유전공학부 (국어국문학, 컴퓨터공학 전공)"
            />
            <TitleContent title="생년월일" contents="2000.07.26." />
            <TitleContent title="고향" contents="경상북도 구미시" />
            <TitleContent title="MBTI" contents="ENFJ" />
            <TitleContent
              title="현재 상태"
              contents="Tailwind css랑 chatgpt 없으면 코딩 못함"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
