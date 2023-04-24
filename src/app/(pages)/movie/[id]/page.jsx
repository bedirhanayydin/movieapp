import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";

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
        loading="lazy"
        className="bg-cover text-white "
        placeholder="blur"
        blurDataURL="data:../assets/blur.jpg"
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">
          {movieDetail?.title || <Skeleton />}
        </div>
        <div className="w-1/2 line-clamp-3">
          {movieDetail?.overview || <Skeleton count={10} />}
        </div>
        <div className="my-3">
          {movieDetail?.release_date || <Skeleton />} - Vote Average={" "}
          {movieDetail?.vote_average || <Skeleton />}
        </div>
        <div className="border w-32 hover:bg-white hover:text-black my-2 p-2 rounded-md text-center text-lg cursor-pointer transition duration-500">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
