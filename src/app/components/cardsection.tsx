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
        <section className="flex flex-wrap mx-auto h-fit content-stretch justify-center">
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
