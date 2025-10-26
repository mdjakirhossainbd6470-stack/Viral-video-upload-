
import React, { useState } from 'react';
import type { CardData } from '../types';
import { CardType } from '../types';
import { HeartIcon } from './icons/HeartIcon';

interface ContentCardProps {
  card: CardData;
}

const UnlockButton: React.FC<{ ads: number; progress: number }> = ({ ads, progress }) => (
  <div className="flex items-center space-x-4 mt-4">
    <button className="flex-grow bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
      Unlock — {ads} ads
    </button>
    <div className="flex-shrink-0 bg-black/20 text-white text-lg font-mono rounded-lg w-16 h-12 flex items-center justify-center border border-white/20">
      {progress}/{ads}
    </div>
  </div>
);

const ContentCard: React.FC<ContentCardProps> = ({ card }) => {
  
  const [isLiked, setIsLiked] = useState(card.type === CardType.SINGLE ? card.isLiked : false);

  const toggleLike = () => {
    if (card.type === CardType.SINGLE) {
        setIsLiked(prev => !prev);
    }
  }

  const renderCardContent = () => {
    switch (card.type) {
      case CardType.BANNER:
        return (
          <>
            <div className="relative rounded-t-2xl overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold tracking-widest uppercase opacity-70">No Preview</span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-white">{card.title}</h2>
              <p className="text-md text-gray-300">{card.subtitle}</p>
              <UnlockButton ads={card.unlockAds} progress={card.progress} />
            </div>
          </>
        );
      case CardType.COLLAGE:
        return (
          <>
            <div className="grid grid-cols-2 gap-1">
              <img src={card.imageUrls[0]} alt="Collage part 1" className="w-full h-64 object-cover rounded-tl-2xl" />
              <img src={card.imageUrls[1]} alt="Collage part 2" className="w-full h-64 object-cover rounded-tr-2xl" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-white">{card.title}</h2>
              <UnlockButton ads={card.unlockAds} progress={card.progress} />
            </div>
          </>
        );
      case CardType.SINGLE:
        return (
          <div className="relative">
            <img src={card.imageUrl} alt={card.title} className="w-full h-auto object-cover rounded-2xl" />
            <div className="absolute top-0 left-0 p-4 bg-black/50 rounded-br-2xl rounded-tl-2xl">
                <h2 className="text-md font-semibold text-white">{card.title}</h2>
            </div>
             <button onClick={toggleLike} className="absolute top-4 right-4 p-2 bg-black/40 rounded-full transition-colors">
                <HeartIcon className="w-6 h-6" filled={isLiked} />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#191d32] rounded-2xl shadow-lg overflow-hidden border border-white/10">
      {renderCardContent()}
    </div>
  );
};

export default ContentCard;
