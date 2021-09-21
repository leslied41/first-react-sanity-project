import React from "react";
import image from "../south_park.jpg";
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="butters"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-7xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          the South Park
        </h1>
      </section>
    </main>
  );
}
