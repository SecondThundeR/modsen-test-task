import { VolumeFullInfoType } from "@/schemas/api/volume";

export function BookDescription({
  description,
}: {
  description: VolumeFullInfoType["description"];
}) {
  if (!description) return null;

  return (
    <div
      className="border-2 border-base-200 p-5"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
