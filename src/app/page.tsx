import HeroSection from "./components/herosection";
import CardSection from "./components/cardsection";
import herostudy from "../../public/placeholders/hero-study.png";

export default function Home() {
  const heroImage = {
    src: herostudy,
    blurUrl: "N78zfI9G9b~AIp-po~V?%2NIIoxt0M%0xZE3xZE3",
    alt: "Working in my study.",
  };

  return (
    <main className="bg-panettone-300">
      <HeroSection heroImage={heroImage} heroLogo={true} />
      <CardSection />
    </main>
  );
}
