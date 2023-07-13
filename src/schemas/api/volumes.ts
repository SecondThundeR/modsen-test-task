import { z } from "zod";

export const VolumesInfoSchema = z.object({
  title: z.string().nullish(),
  authors: z.array(z.string()).nullish(),
  categories: z.array(z.string()).nullish(),
  imageLinks: z
    .object({
      smallThumbnail: z.string(),
      thumbnail: z.string(),
    })
    .nullish(),
});

export const VolumesItemSchema = z.object({
  id: z.string(),
  etag: z.string(),
  volumeInfo: VolumesInfoSchema.nullish(),
});

export type VolumesItemType = z.infer<typeof VolumesItemSchema>;

export const VolumesSchema = z.object({
  totalItems: z.number().nullish(),
  items: VolumesItemSchema.array().nullish(),
});

export type VolumesType = z.infer<typeof VolumesSchema>;
