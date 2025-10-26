
import React from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { MoreVertIcon } from './icons/MoreVertIcon';


const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1a1c3a]/80 backdrop-blur-sm z-10 p-4 flex items-center justify-between border-b border-white/10">
      <button className="p-2">
        <CloseIcon className="w-6 h-6 text-white" />
      </button>
      <div className="flex items-center space-x-2 cursor-pointer">
        <h1 className="text-xl font-semibold text-white">বাংলাদেশী ভাইরাল...</h1>
        <ChevronDownIcon className="w-5 h-5 text-white" />
      </div>
      <button className="p-2">
        <MoreVertIcon className="w-6 h-6 text-white" />
      </button>
    </header>
  );
};

export default Header;
