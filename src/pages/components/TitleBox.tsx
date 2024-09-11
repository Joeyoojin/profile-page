import React from 'react';

interface TitleBoxProps {
  title: string;
}

const TitleBox: React.FC<TitleBoxProps> = ({ title }) => {
  return (
    <div className="w-28 h-10 bg-[#dcecff] rounded-md border border-[#5cadff] flex items-center justify-center mr-2">
      <span className="text-black/60 text-xl font-bold">{title}</span>
    </div>
  );
};

export default TitleBox;
