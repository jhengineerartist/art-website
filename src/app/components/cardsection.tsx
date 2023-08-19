import React from "react";
import Card from "./card";
import getAllPostsData from "@/lib/mdprovider/placeholderprovider";

export default function CardSection() {
  const allPosts: BlogPost[] = getAllPostsData();

  const cards = allPosts.map((post) => {
    return <Card blogPost={post} />;
  });

  return (
    <section
      id="blog"
      className="flex flex-col items-center justify-spread gap-4 mx-auto h-screen section-scroll"
    >
      <div className="text-center m-4">
        <h1 className="text-3xl text-panettone-100 mb-2">
          Blog
        </h1>
        <p className="text-panettone-100">
          Explore my latest blog posts and musings.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards}
      </div>
    </section>
  );
}
