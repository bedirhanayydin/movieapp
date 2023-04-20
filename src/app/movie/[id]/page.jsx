import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className="relative p-7 min-h-screen ">
      <Image
        fill
        alt="Loading..."
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        style={{ objectFit: "cover" }}
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date} - Vote Average={" "}
          {movieDetail?.vote_average}
        </div>
        <div className="border w-32 hover:bg-white hover:text-black my-2 p-2 rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
