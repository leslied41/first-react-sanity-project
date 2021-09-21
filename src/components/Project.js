import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";
export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await SanityClient.fetch(
          `*[_type=='project']{title,description,link,place,projectType,tags,date}`
        );
        setProjectData(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My clips</h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to fantastic moments
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => {
              return (
                <article
                  key={index}
                  className="relative rounder-lg shadow-xl bg-white p-16"
                >
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{""}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Company</strong>:{""}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{""}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      view the project{""}
                      <span role="img" aria-label="right-pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
        </section>
      </section>
    </main>
  );
}
