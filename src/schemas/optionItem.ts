import { z } from "zod";

export const OptionItemSchema = z.object({
  id: z.number(),
  value: z.string(),
  title: z.string(),
});

export type OptionItemType = z.infer<typeof OptionItemSchema>;

export const OptionItemArraySchema = OptionItemSchema.array();

export type OptionItemArrayType = z.infer<typeof OptionItemArraySchema>;
