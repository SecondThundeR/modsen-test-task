import { VolumeType } from "../../schemas/api/volume";

export const DetailsCover = (props: VolumeType["volumeInfo"]) => {
  const { title, imageLinks } = props;

  if (!imageLinks || !imageLinks.small || !imageLinks.medium || !imageLinks.large || !imageLinks.extraLarge)
    return <h1 className="text-xl sm:text-2xl text-center">No cover {title && `for "${title}"`}</h1>;

  return (
    <picture>
      <source srcSet={imageLinks.medium} media="(min-width: 768px) and (max-width: 1199px)" />
      <source srcSet={imageLinks.large} media="(min-width: 1200px)" />
      <img src={imageLinks.small} alt={`${title} cover`} />
    </picture>
  );
};
