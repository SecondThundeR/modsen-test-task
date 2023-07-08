import { z } from "zod";

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
      smallThumbnail: z.string(),
      thumbnail: z.string(),
    })
    .nullish(),
  language: z.string(),
  previewLink: z.string(),
  infoLink: z.string(),
  canonicalVolumeLink: z.string(),
});

const SaleInfoSchema = z.object({
  country: z.string(),
  saleability: z.string(),
  isEbook: z.boolean(),
});

const AccessInfoSchema = z.object({
  country: z.string(),
  viewability: z.string(),
  embeddable: z.boolean(),
  publicDomain: z.boolean(),
  textToSpeechPermission: z.string(),
  epub: z.object({
    isAvailable: z.boolean(),
  }),
  pdf: z.object({
    isAvailable: z.boolean(),
  }),
  webReaderLink: z.string(),
  accessViewStatus: z.string(),
  quoteSharingAllowed: z.boolean(),
});

const SearchInfoSchema = z.object({
  textSnippet: z.string(),
});

const VolumesItemSchema = z.object({
  kind: z.string(),
  id: z.string(),
  etag: z.string(),
  selfLink: z.string(),
  volumeInfo: VolumeInfoSchema.nullish(),
  saleInfo: SaleInfoSchema,
  accessInfo: AccessInfoSchema,
  searchInfo: SearchInfoSchema.nullish(),
});

export const VolumesSchema = z.object({
  kind: z.string().nullish(),
  totalItems: z.number().nullish(),
  items: VolumesItemSchema.array().nullish(),
});

export type VolumesType = z.infer<typeof VolumesSchema>;
