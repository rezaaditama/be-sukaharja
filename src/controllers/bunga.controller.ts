import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import {
  fetchAllBungaService,
  fetchBungaByIdService,
} from '../services/bunga.service';

export const getAllBunga = async (req: Request, res: Response) => {
  try {
    const data = await fetchAllBungaService();
    logger.info('Semua Data Bunga Dikirim');
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Get All Data Bunga',
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
      message: 'Gagal Mengambil Data Bunga',
      error: error,
    });
  }
};

export const getBungaById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = await fetchBungaByIdService(Number(id));

    if (!data) {
      logger.info('Data Bunga Tidak Ditemukan');
      res.status(404).json({
        status: false,
        statusCode: 404,
        message: `Data Bunga Tidak Ditemukan`,
      });
      return;
    }
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: `Mengirim Data Bunga Dengan ID ${id}`,
      data: data,
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal mengambil data bunga by ID',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });
    res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Gagal mengambil data bunga',
      error: error,
    });
  }
};
