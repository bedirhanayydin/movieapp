"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ dt }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[470px] relative imgContainer cursor-pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt="Loading..."
        width={470}
        height={300}
        className="object-cover"
      />

      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-90 transition-opacity">
        <div className="text-2xl font-bold">{dt?.title}</div>
        <div>
          {dt?.release_date} - Vote Average= {dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
