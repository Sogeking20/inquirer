import Image from "next/image";
import MainBanner from "@/components/shared/main-banner";
import TestsCatalog from "@/components/shared/tests-catalog";
import TextBlock from "@/components/shared/text-block";
import ReviewsSlider from "@/components/shared/reviews-slider";
import Faq from "@/components/shared/faq";

export default function Home() {
  return (
    <div className="">
      <MainBanner />
      <TestsCatalog />
      <TextBlock />
      <ReviewsSlider />
      <Faq />
    </div>
  );
}
