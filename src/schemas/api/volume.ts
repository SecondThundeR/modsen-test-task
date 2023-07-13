import { z } from "zod";

import { VolumesInfoSchema } from "@/schemas/api/volumes";

export const VolumeInfoSchema = VolumesInfoSchema.merge(
  z.object({
    description: z.string().nullish(),
    imageLinks: z
      .object({
        smallThumbnail: z.string().nullish(),
        thumbnail: z.string().nullish(),
        small: z.string().nullish(),
        medium: z.string().nullish(),
        large: z.string().nullish(),
        extraLarge: z.string().nullish(),
      })
      .nullish(),
  }),
);

export type VolumeInfoType = z.infer<typeof VolumeInfoSchema>;

export const VolumeSchema = z.object({
  etag: z.string(),
  volumeInfo: VolumeInfoSchema,
});

export type VolumeType = z.infer<typeof VolumeSchema>;
