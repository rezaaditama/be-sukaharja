import { z } from 'zod';

export const createBungaValidation = z.object({
  nama_bunga: z.string().min(5),
  manfaat_bunga: z.string().min(10),
  bunga_id: z.number(),
  optional: z.string().optional(),
});

export type CreateBungaInput = z.infer<typeof createBungaValidation>;
