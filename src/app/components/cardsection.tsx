import React from 'react'
import Card from './card'
import ph_graphite from "../../../public/placeholders/graphite1.png"

const card1Image = {
    src: ph_graphite,
    blurUrl: "N78zfI9G9b~AIp-po~V?%2NIIoxt0M%0xZE3xZE3",
    alt: "Working in my study."
}


export default function cardsection() {
    return (
        <section className="mx-auto max-w-screen-2xl min-h-screen h-fit content-stretch px-8 my-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
    )
}
