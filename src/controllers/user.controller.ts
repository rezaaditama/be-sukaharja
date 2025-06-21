import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { fetchAllUserService } from '../services/user.service';

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await fetchAllUserService();
    logger.info('Semua Data User Dikirim');
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Get All Data User',
      data: data,
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal mengambil data bunga',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });
    res.status(400).json({
      status: false,
      statusCode: 400,
      message: 'Gagal Mengambil Data User',
      error: error,
    });
  }
};
