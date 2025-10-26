
import React, { useState } from 'react';
import Header from './components/Header';
import ContentCard from './components/ContentCard';
import BottomNav from './components/BottomNav';
// FIX: `CardType` is an enum and used as a value, so it must be imported as a value and not with `import type`.
import type { CardData } from './types';
import { CardType, NavTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>(NavTab.Home);

  const cardData: CardData[] = [
    {
      id: 1,
      type: CardType.BANNER,
      title: 'বাচ্চা*দে*র ৪ টি ভি*ডি*ও একসাথে 👇',
      subtitle: 'দেখতে Unlock এ ক্লিক করুন 👇',
      imageUrl: 'https://picsum.photos/seed/banner1/600/200',
      unlockAds: 3,
      progress: 0,
    },
    {
      id: 2,
      type: CardType.COLLAGE,
      title: 'Full Video 👇',
      imageUrls: ['https://picsum.photos/seed/girl1/300/400', 'https://picsum.photos/seed/girl2/300/400'],
      unlockAds: 5,
      progress: 0,
    },
    {
      id: 3,
      type: CardType.SINGLE,
      title: 'বিস্তারিত কমেন্টে 👇',
      imageUrl: 'https://picsum.photos/seed/girl3/600/400',
      isLiked: false,
    },
     {
      id: 4,
      type: CardType.SINGLE,
      title: 'New Content Here',
      imageUrl: 'https://picsum.photos/seed/girl4/600/400',
      isLiked: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1a1c3a] via-[#10152a] to-[#0c0f1e] min-h-screen font-sans text-white">
      <Header />
      <main className="px-3 pt-20 pb-28">
        <div className="space-y-6">
          {cardData.map((card) => (
            <ContentCard key={card.id} card={card} />
          ))}
        </div>
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;