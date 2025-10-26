
import React from 'react';
import { NavTab } from '../types';
import { HomeIcon } from './icons/HomeIcon';
import { HeartIcon } from './icons/HeartIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { LinkIcon } from './icons/LinkIcon';

interface BottomNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

const NavItem: React.FC<{
  tab: NavTab;
  icon: React.ReactNode;
  activeTab: NavTab;
  onClick: () => void;
}> = ({ tab, icon, activeTab, onClick }) => {
  const isActive = activeTab === tab;
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-1 w-20 transition-colors duration-300 ${
        isActive ? 'text-cyan-300' : 'text-gray-300 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{tab}</span>
    </button>
  );
};


const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { tab: NavTab.Home, icon: <HomeIcon className="w-6 h-6" filled={activeTab === NavTab.Home} /> },
    { tab: NavTab.Favorites, icon: <HeartIcon className="w-6 h-6" filled={activeTab === NavTab.Favorites} /> },
    { tab: NavTab.Tutorials, icon: <BookOpenIcon className="w-6 h-6" filled={activeTab === NavTab.Tutorials} /> },
    { tab: NavTab.Links, icon: <LinkIcon className="w-6 h-6" /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-sm z-10">
      <div className="bg-white/10 backdrop-blur-lg rounded-full shadow-2xl shadow-black/30 flex items-center justify-around p-2">
        {navItems.map((item) => (
            <NavItem 
                key={item.tab}
                tab={item.tab}
                icon={item.icon}
                activeTab={activeTab}
                onClick={() => setActiveTab(item.tab)}
            />
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
