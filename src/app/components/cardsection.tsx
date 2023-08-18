import React from "react";
import Card from "./card";
import ph_graphite from "../../../public/placeholders/graphite1.png";
import getAllPostsData from "@/lib/mdprovider/placeholderprovider";

const card1Image = {
  src: ph_graphite,
  blurUrl: "N78zfI9G9b~AIp-po~V?%2NIIoxt0M%0xZE3xZE3",
  alt: "Working in my study.",
};

export default function cardsection() {
  const allPosts: BlogPost[] = getAllPostsData();

  const cards = allPosts.map((post) => {
    return <Card blogPost={post} />;
  });

  return (
    <section className="flex flex-wrap mx-auto h-fit content-stretch justify-center my-4">
      <h1>Blog</h1>
      {cards}
    </section>
  );
}
