import { VolumeType } from "../../schemas/api/volume";

export const DetailsCover = (props: VolumeType["volumeInfo"]) => {
  const { title, imageLinks } = props;

  if (
    !imageLinks ||
    !imageLinks.small ||
    !imageLinks.smallThumbnail ||
    !imageLinks.thumbnail ||
    !imageLinks.medium ||
    !imageLinks.large ||
    !imageLinks.extraLarge
  )
    return <h1 className="text-xl sm:text-2xl text-center">No cover {title && `for "${title}"`}</h1>;

  return (
    <img
      className="h-[320px] sm:h-[512px] lg:h-[640px] aspect-auto"
      srcSet={`${imageLinks.small} 1x, ${imageLinks.medium} 2x, ${imageLinks.large} 3x`}
      src={imageLinks.large}
      alt={`${title} cover`}
    />
  );
};
