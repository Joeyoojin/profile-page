import React from 'react';

const MobilePage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#ECF2FF] to-[#FFF4D2] relative">
      <h1>조유진</h1>
      <div>
        - 학번: 19학번
        <br />
        - 소속: 자유전공학부
        <br />
        - MBTI: ENFJ
      </div>
      <h3>더 자세한 정보는 PC로 접속하면 보실 수 있습니다!</h3>
    </div>
  );
};

export default MobilePage;
