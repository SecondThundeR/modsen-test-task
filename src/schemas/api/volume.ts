import { z } from "zod";
import { AccessInfoSchema, SaleInfoSchema } from "./volumes";

const VolumeInfoSchema = z.object({
  title: z.string().nullish(),
  subtitle: z.string().nullish(),
  authors: z.array(z.string()).nullish(),
  publisher: z.string().nullish(),
  publishedDate: z.string().nullish(),
  description: z.string().nullish(),
  industryIdentifiers: z
    .array(
      z.object({
        type: z.string(),
        identifier: z.string(),
      }),
    )
    .nullish(),
  readingModes: z.object({
    text: z.boolean(),
    image: z.boolean(),
  }),
  pageCount: z.number().nullish(),
  printedPageCount: z.number().nullish(),
  dimensions: z
    .object({
      height: z.string(),
      width: z.string(),
      thickness: z.string().nullish(),
    })
    .nullish(),
  printType: z.string(),
  categories: z.array(z.string()).nullish(),
  averageRating: z.number().nullish(),
  ratingsCount: z.number().nullish(),
  maturityRating: z.string(),
  allowAnonLogging: z.boolean(),
  contentVersion: z.string(),
  panelizationSummary: z
    .object({
      containsEpubBubbles: z.boolean(),
      containsImageBubbles: z.boolean(),
    })
    .nullish(),
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
  language: z.string(),
  previewLink: z.string(),
  infoLink: z.string(),
  canonicalVolumeLink: z.string(),
});

const LayerInfoSchema = z.object({
  layers: z.array(
    z.object({
      layerId: z.string(),
      volumeAnnotationsVersion: z.string(),
    }),
  ),
});

export const VolumeSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  selfLink: z.string(),
  volumeInfo: VolumeInfoSchema,
  layerInfo: LayerInfoSchema.nullish(),
  saleInfo: SaleInfoSchema,
  accessInfo: AccessInfoSchema,
});

export type VolumeType = z.infer<typeof VolumeSchema>;
