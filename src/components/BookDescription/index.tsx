import { memo } from "react";
import { VolumeInfoType } from "@/schemas/api/volume";

type BookDescriptionProps = Pick<VolumeInfoType, "description">;

export const BookDescription = memo(function BookDescription({
  description,
}: BookDescriptionProps) {
  if (!description) return null;

  return (
    <div
      className="border-2 border-base-content p-5"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
});
