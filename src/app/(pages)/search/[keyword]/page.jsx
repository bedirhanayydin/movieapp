import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `${process.env.BASE_API_URL}/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US$include_adult=false`
  );

  const data = await res.json();
  return (
    <div>
      {!data?.results == [] ? (
        <div className="flex justify-center text-2xl font-bold">
          Movie not found
        </div>
      ) : (
        <div className="flex items-center flex-wrap gap-2">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
