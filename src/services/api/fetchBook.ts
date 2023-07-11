import axios from "axios";

import { VolumeSchema } from "@/schemas/api/volume";

export const fetchBook = async (id: string | undefined) => {
  if (!id) throw new Error("No ID provided");

  const res = await axios.get(`${import.meta.env.VITE_BOOKS_API_URL}/${id}`, {
    params: {
      key: import.meta.env.VITE_BOOKS_API_KEY,
    },
  });
  return VolumeSchema.parseAsync(res.data);
};
