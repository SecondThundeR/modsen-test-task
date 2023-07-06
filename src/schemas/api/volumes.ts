import { z } from "zod";

const VolumeInfoSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  authors: z.array(z.string()),
  publisher: z.string(),
  publishedDate: z.string(),
  description: z.string(),
  industryIdentifiers: z.array(
    z.object({
      type: z.string(),
      identifier: z.string(),
    }),
  ),
  readingModes: z.object({
    text: z.boolean(),
    image: z.boolean(),
  }),
  pageCount: z.number(),
  printType: z.string(),
  categories: z.array(z.string()),
  averageRating: z.number(),
  ratingsCount: z.number(),
  maturityRating: z.string(),
  allowAnonLogging: z.boolean(),
  contentVersion: z.string(),
  panelizationSummary: z.object({
    containsEpubBubbles: z.boolean(),
    containsImageBubbles: z.boolean(),
  }),
  imageLinks: z.object({
    smallThumbnail: z.string(),
    thumbnail: z.string(),
  }),
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
  volumeInfo: VolumeInfoSchema,
  saleInfo: SaleInfoSchema,
  accessInfo: AccessInfoSchema,
  searchInfo: SearchInfoSchema,
});

export const VolumesSchema = z.object({
  kind: z.string(),
  totalItems: z.number(),
  items: VolumesItemSchema.array().optional(),
});

export type VolumesType = z.infer<typeof VolumesSchema>;
