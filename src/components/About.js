import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../avatar.png";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data =
          await sanityClient.fetch(`*[_type=='author'&&name=='Leslie Duan']{
  name,
  bio,
  'authorImage': image.asset->url
}`);
        setAuthor(data[0]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  if (!author) {
    return <div>Loading...</div>;
  }
  return (
    <main className="relative">
      <img src={image} alt="bc" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container ma-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt="avatar"
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center ">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey Beauty! I'm Leslie Duan!
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="elrqgv25"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
