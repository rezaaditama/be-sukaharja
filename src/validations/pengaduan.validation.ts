import { z } from 'zod';

export const createPengaduanValidation = z.object({
  jenis_pengaduan: z.string().min(5),
  detail_pengaduan: z.string().min(10),
  kategori_pengaduan: z.string().min(1),
});

export type CreatePengaduanDTO = z.infer<typeof createPengaduanValidation>;
