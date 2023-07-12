import { VolumeFullInfoType } from "@/schemas/api/volume";

interface BookDescriptionProps {
  description: VolumeFullInfoType["description"];
}

export function BookDescription({ description }: BookDescriptionProps) {
  if (!description) return null;

  return (
    <div
      className="border-2 border-base-200 p-5"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
