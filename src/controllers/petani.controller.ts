import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { fetchAllPetaniService } from '../services/petani.service';

export const getAllPetani = async (req: Request, res: Response) => {
  try {
    const data = await fetchAllPetaniService();
    logger.info('Semua Data Petani Dikirim');
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Get All Data Petani',
      data: data,
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal mengambil data petani',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });
    res.status(400).json({
      status: false,
      statusCode: 400,
      message: 'Gagal Mengambil Data Petani',
      error: error,
    });
  }
};
