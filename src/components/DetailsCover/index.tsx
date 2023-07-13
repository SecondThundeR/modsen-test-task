import { memo } from "react";
import cn from "classnames";

import { CoverLoader } from "@/components/CoverLoader";

import { useOnLoad } from "@/hooks/useOnLoad";

import { VolumeInfoType } from "@/schemas/api/volume";

type DetailsCoverProps = Pick<VolumeInfoType, "title" | "imageLinks">;

export const DetailsCover = memo(function DetailsCover({
  title,
  imageLinks,
}: DetailsCoverProps) {
  const { isLoading, onLoad } = useOnLoad();

  if (!imageLinks?.small || !imageLinks.medium || !imageLinks.large)
    return (
      <h1 className="text-center text-xl sm:text-2xl">
        No cover {title && `for "${title}"`}
      </h1>
    );

  return (
    <CoverLoader isLoading={isLoading}>
      <picture
        className={cn("drop-shadow-2xl", {
          hidden: isLoading,
        })}
        onLoad={onLoad}
      >
        <source
          srcSet={imageLinks.medium}
          media="(min-width: 768px) and (max-width: 1199px)"
        />
        <source srcSet={imageLinks.large} media="(min-width: 1200px)" />
        <img
          src={imageLinks.small}
          title={title ?? ""}
          alt={title ? `${title} cover` : ""}
        />
      </picture>
    </CoverLoader>
  );
});
