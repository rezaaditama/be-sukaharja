import { Request, Response } from 'express';
import { fetchAllPengaduanService } from '../services/pengaduan.service';
import { logger } from '../utils/logger';

export const getAllPengaduan = async (req: Request, res: Response) => {
  try {
    const data = await fetchAllPengaduanService();
    logger.info('Semua Data Pengaduan Dikirim');
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Get All Data Pengaduan',
      data: data,
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal mengambil data pengaduan',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });
    res.status(400).json({
      status: false,
      statusCode: 400,
      message: 'Gagal Mengambil Data Pengaduan',
      error: error,
    });
  }
};
