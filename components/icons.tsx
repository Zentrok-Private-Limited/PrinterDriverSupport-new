import type { FC } from 'react';

type IconProps = { className?: string };

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export const ChatIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
  </svg>
);

export const SendIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M22 2 11 13" />
    <path d="m22 2-7 20-4-9-9-4z" />
  </svg>
);

export const CloseIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const UsbIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <circle cx="12" cy="20" r="1.6" />
    <path d="M12 18.4V8" />
    <path d="M12 8 8 11" />
    <path d="M12 8l4 3" />
    <path d="M8 11v3" />
    <path d="M16 11v3" />
    <rect x="9" y="4" width="6" height="4" rx="1" />
  </svg>
);

export const WifiIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M5 13a10 10 0 0 1 14 0" />
    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
    <path d="M2 8.8a16 16 0 0 1 20 0" />
    <line x1="12" y1="20" x2="12" y2="20" />
  </svg>
);

export const ArrowRightIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const DownloadIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export const PrinterSetupIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.95} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 18V9h24v9" />
    <path d="M17 38H9V22a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v15" />
    <path d="M21 32h22v18H21z" />
    <path d="M25 38h14" />
    <path d="M25 44h9" />
    <path d="M13 25h6" />
    <path d="M46 25h5" />
    <circle cx="48" cy="44" r="9" />
    <path d="m44 44 3 3 6-6" />
  </svg>
);

export const PrinterOfflineIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.95} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 20V10h23v10" />
    <path d="M17 40h-5V25a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v12" />
    <path d="M21 34h23v18H21z" />
    <path d="M25 40h13" />
    <path d="M25 46h9" />
    <path d="M16 27h5" />
    <path d="M47 27h3" />
    <circle cx="48" cy="43" r="10" />
    <path d="M48 36v8l5 3" />
  </svg>
);

export const WirelessIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.95} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 22a34 34 0 0 1 46 0" />
    <path d="M15 29a25 25 0 0 1 34 0" />
    <path d="M21 36a16 16 0 0 1 22 0" />
    <path d="M27 43a8 8 0 0 1 10 0" />
    <path d="M32 50v6" />
    <path d="M14 44h-4" />
    <path d="M54 44h-4" />
  </svg>
);

export const PaperJamIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.95} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 18V9h24v9" />
    <path d="M17 38H9V22a4 4 0 0 1 4-4h38a4 4 0 0 1 4 4v15" />
    <path d="M21 32h22v18H21z" />
    <path d="M25 38h14" />
    <path d="M13 25h6" />
    <path d="M46 25h5" />
    <path d="M32 50v5" />
    <path d="m28 53 4 2 4-2" />
  </svg>
);

export const PrintQueueIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.95} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V11h28v9" />
    <path d="M15 40H7V25a5 5 0 0 1 5-5h40a5 5 0 0 1 5 5v14" />
    <path d="M21 34h22v20H21z" />
    <path d="M27 40h10" />
    <path d="M27 46h7" />
    <path d="M14 28h5" />
    <path d="M47 28h3" />
  </svg>
);

export const ScannerIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.95} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 26h48l-4 24H12z" />
    <path d="M8 26 12 8h40l4 18" />
    <path d="M16 38h32" />
    <path d="M18 44h28" />
    <path d="M20 50h24" />
  </svg>
);

export const MailIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const PhoneIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ShieldIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const AlertIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
  </svg>
);

export const CheckCircleIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

export const SearchIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} aria-hidden="true" {...base}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
