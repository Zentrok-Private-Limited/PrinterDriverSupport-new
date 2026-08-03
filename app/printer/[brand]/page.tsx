import type { Metadata } from "next";
import BrandPage from "./BrandPage";

type Props = {
  params: Promise<{
    brand: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { brand } = await params;

  const brandName =
    brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();

  return {
    title: `${brandName} Setup`,
    description: `Download and install ${brandName} printer drivers.`,
  };
}

export default async function Page({ params }: Props) {
  const { brand } = await params;

  return <BrandPage brand={brand} />;
}