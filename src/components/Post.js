import React from "react";
import sanityClient from "../client.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    try {
      async function fetchData() {
        const data =
          await sanityClient.fetch(`*[_type=='post']{title,slug,mainImage{asset->{
                 _id,url
                }}}`);
        setPost(data);
        console.log(data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          My loved Characters
        </h1>
        <h2 className="texl-lg text-gray-600 mb-12">Welcome to south park</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => {
              return (
                <article key={index}>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full
                        h-full
                        rounded-r
                        object-cover
                        absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opactiy-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
}
