import { useState } from "react";
import cn from "classnames";

import { Spinner } from "@/components/Spinner";

import { VolumeType } from "@/schemas/api/volume";

export const DetailsCover = (props: VolumeType["volumeInfo"]) => {
  const [loading, setLoading] = useState(true);

  const { title, imageLinks } = props;

  if (!imageLinks || !imageLinks.small || !imageLinks.medium || !imageLinks.large)
    return <h1 className="text-xl sm:text-2xl text-center">No cover {title && `for "${title}"`}</h1>;

  return (
    <>
      <div
        className={cn("flex justify-center", {
          hidden: !loading,
        })}
      >
        <Spinner />
      </div>
      <picture
        className={cn("drop-shadow-2xl", {
          hidden: loading,
        })}
        onLoad={() => setLoading(false)}
      >
        <source srcSet={imageLinks.medium} media="(min-width: 768px) and (max-width: 1199px)" />
        <source srcSet={imageLinks.large} media="(min-width: 1200px)" />
        <img src={imageLinks.small} alt={title ? `${title} cover` : ""} />
      </picture>
    </>
  );
};
