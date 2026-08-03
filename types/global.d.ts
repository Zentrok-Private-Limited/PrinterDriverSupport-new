export {};

declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
      close?: () => void;
      sendMessage?: (message: string) => void;
    };
  }
}