import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HP Printer Setup",
  description: "Install HP printer drivers and get setup assistance.",
};

export default function HPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}