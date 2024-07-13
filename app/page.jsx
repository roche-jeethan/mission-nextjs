import Image from "next/image";
//Task3
/* The reason why p-24 works and not p-25 is because p-24 is class utility present in tailwind css
p-24 does exists and when i ctrl+s with p-25, the layout of the website changes and write anything else (say p-22 or p-20), it just
remains the same
The layout of p-24 is getting the padding from top and bottom of the web page */

import React from 'react';
//task4
export const page = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="z-10 max-w-5xl w-full text-center font-serif text-sm" style={{ fontFamily: "'Merriweather', serif" }}>
      <h1 className="text-4xl md:text-6xl font-bold my-4" style={{ fontFamily: "'Great Vibes', cursive" }}>Jeethan Roche</h1>
      </div>
      <div className="z-10 max-w-5xl w-full text-center font-sans text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30">
          Hey, I am an alumni of St Aloysius College and a day scholar at St Joseph Engineering College. It is so nice to be a part
          of the "Sceptix" Group and also of this Institution. <br />
          Nevertheless, I am a person who is very much interested in coding and also in learning new things. <br />
        </p>
        <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 mt-4">
          Actually, this is very exciting to learn and thanks to Pranav for making this happen. No much complaints, simple understanding <br />
          tasks and also a good way to learn. However, I am doing this inside /about section as there would be overlapping with task3 <br />

          <div>Good Job Pranav!</div>
        </p>
      </div>
    </div>
  );
};
export default page;
