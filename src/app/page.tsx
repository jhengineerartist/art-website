import HeroSection from "./components/hero";
import Card from "./components/card"
import herostudy from "../../public/placeholders/hero-study.png"
import ph_graphite from "../../public/placeholders/graphite1.png"

export default function Home() {
  const heroImage = {
    src: herostudy,
    blurUrl: "N78zfI9G9b~AIp-po~V?%2NIIoxt0M%0xZE3xZE3",
    alt: "Working in my study."
  }

  const card1Image = {
    src: ph_graphite,
    blurUrl: "N78zfI9G9b~AIp-po~V?%2NIIoxt0M%0xZE3xZE3",
    alt: "Working in my study."
  }


  return (
    <main>
      <HeroSection
        heroImage={heroImage}
        heroLogo={true} />
      <section className="mx-auto max-w-screen-2xl content-stretch px-8 my-8 grid gap-8 min-h-screen lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <Card
          cardImage={card1Image}
          title=""
          textContent=""
          route=""
          tags={[]}
        />
        <Card
          cardImage={card1Image}
          title=""
          textContent=""
          route=""
          tags={[]}
        />
        <Card
          cardImage={card1Image}
          title=""
          textContent=""
          route=""
          tags={[]}
        />
        <Card
          cardImage={card1Image}
          title=""
          textContent=""
          route=""
          tags={[]}
        />
        <Card
          cardImage={card1Image}
          title=""
          textContent=""
          route=""
          tags={[]}
        />
        <Card
          cardImage={card1Image}
          title=""
          textContent=""
          route=""
          tags={[]}
        />
      </section>
    </main>
  )
}
