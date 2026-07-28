import type { FC } from 'react';

type LogoProps = {
  className?: string;
};

export const HpLogo: FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 120 46" className={className} aria-label="HP" role="img">
    <text
      x="60"
      y="34"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="30"
      fontWeight="900"
      fill="#0096d6"
      letterSpacing="-1"
    >
      hp
    </text>
  </svg>
);

export const EpsonLogo: FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 130 46" className={className} aria-label="Epson" role="img">
    <text
      x="65"
      y="32"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="22"
      fontWeight="700"
      fill="#003399"
      letterSpacing="0.5"
    >
      EPSON
    </text>
  </svg>
);

export const BrotherLogo: FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 140 46" className={className} aria-label="Brother" role="img">
    <text
      x="70"
      y="32"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="22"
      fontWeight="800"
      fill="#005bac"
      letterSpacing="0.5"
    >
      Brother
    </text>
  </svg>
);

export const CanonLogo: FC<LogoProps> = ({ className }) => (
  <svg viewBox="0 0 130 46" className={className} aria-label="Canon" role="img">
    <text
      x="65"
      y="32"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="24"
      fontWeight="800"
      fill="#d3141a"
      letterSpacing="0.5"
    >
      Canon
    </text>
  </svg>
);

export type BrandId = 'hp' | 'epson' | 'brother' | 'canon' | 'home' | 'contact';

export const brandLogos: Record<Exclude<BrandId, 'home' | 'contact'>, FC<LogoProps>> = {
  hp: HpLogo,
  epson: EpsonLogo,
  brother: BrotherLogo,
  canon: CanonLogo,
};

export const brandNames: Record<Exclude<BrandId, 'home' | 'contact'>, string> = {
  hp: 'HP',
  epson: 'Epson',
  brother: 'Brother',
  canon: 'Canon',
};
