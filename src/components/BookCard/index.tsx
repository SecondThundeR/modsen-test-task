import { memo } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { CoverLoader } from "@/components/CoverLoader";
import { EmptyCover } from "@/components/EmptyCover";

import { ROUTES } from "@/constants/routes";

import { useOnLoad } from "@/hooks/useOnLoad";

import { VolumesItemType } from "@/schemas/api/volumes";

type BookCardProps = Pick<VolumesItemType, "id" | "volumeInfo">;

export const BookCard = memo(function BookCard({
  id,
  volumeInfo,
}: BookCardProps) {
  const { isLoading, onLoad } = useOnLoad();

  if (!volumeInfo) return null;

  const { imageLinks, title, categories, authors } = volumeInfo;
  const category = categories?.[0];
  const authorsInfo = authors?.join(", ");
  const thumbnail = imageLinks?.thumbnail;

  return (
    <Link
      to={`/${ROUTES.books}/${id}`}
      className="min-h-16 flex aspect-auto w-72 flex-col items-center gap-4 rounded-xl bg-base-200 px-4 py-6 duration-[350ms] ease-in-out hover:-translate-y-3 hover:drop-shadow-xl"
    >
      {thumbnail ? (
        <CoverLoader isLoading={isLoading} classNames="h-52">
          <img
            className={cn("h-52 w-36 shadow-2xl", {
              hidden: isLoading,
            })}
            src={thumbnail}
            onLoad={onLoad}
            title={title ?? ""}
            alt={title ? `${title} cover` : ""}
          />
        </CoverLoader>
      ) : (
        <EmptyCover />
      )}
      <div className="flex w-full flex-col items-start gap-1">
        <p className="link-primary link">{category}</p>
        <h1 className="line-clamp-1 text-xl font-bold">{title}</h1>
        <p className="line-clamp-2 opacity-50">{authorsInfo}</p>
      </div>
    </Link>
  );
});
