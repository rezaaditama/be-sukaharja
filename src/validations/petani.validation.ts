import { z } from 'zod';

export const createPetaniValidation = z.object({
  nik_petani: z.number().min(4),
  alamat_petani: z.string().min(10),
  nama_petani: z.string().min(2),
  nama_bunga: z.string().min(4),
});

export type CreatePetaniDTO = z.infer<typeof createPetaniValidation>;

export const updatePetaniValidation = z.object({
  nama_petani: z.string().min(2),
  alamat_petani: z.string().min(10),
  nama_bunga: z.string().min(4),
});

export type PetaniUpdateDTO = z.infer<typeof updatePetaniValidation>;
