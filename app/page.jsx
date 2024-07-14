import React from 'react';
//task4
export const page = () => {
  // const navigate = useNavigate();
  return (
    <>
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

          Good Job Pranav!
        </p>
      </div>
      {/* <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={() => navigate('/app/profile')}
      >
        Go to Profile
      </button> */}
    </div>
    </>
  );
};

export default page;