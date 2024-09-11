import React from 'react';

interface InputBoxProps {
  contents: string;
}

const InputBox: React.FC<InputBoxProps> = ({ contents }) => {
  return (
    <div className=" text-black text-xl font-medium flex items-center">
      {contents}
    </div>
  );
};

export default InputBox;
