import Image from "next/image";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

function MyImage({ src, alt }) {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => setLoading(false);
  const handleError = () => setLoading(false);

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-32">
          <ClipLoader color="#000" loading={loading} size={35} />
        </div>
      )}
      <Image src={src} alt={alt} onLoad={handleLoad} onError={handleError} />
    </>
  );
}

export default MyImage;
