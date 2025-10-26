
export enum CardType {
  BANNER,
  COLLAGE,
  SINGLE,
}

export enum NavTab {
    Home = 'হোম',
    Favorites = 'পছন্দের',
    Tutorials = 'টিউটোরিয়াল',
    Links = 'লিংক',
}

interface BaseCardData {
  id: number;
  type: CardType;
  title: string;
}

export interface BannerCardData extends BaseCardData {
  type: CardType.BANNER;
  subtitle: string;
  imageUrl: string;
  unlockAds: number;
  progress: number;
}

export interface CollageCardData extends BaseCardData {
  type: CardType.COLLAGE;
  imageUrls: [string, string];
  unlockAds: number;
  progress: number;
}

export interface SingleCardData extends BaseCardData {
  type: CardType.SINGLE;
  imageUrl: string;
  isLiked: boolean;
}

export type CardData = BannerCardData | CollageCardData | SingleCardData;
