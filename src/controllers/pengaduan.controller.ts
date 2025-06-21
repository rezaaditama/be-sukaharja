import { Request, Response } from 'express';
import { createPengaduanValidation } from '../validations/pengaduan.validation';
import {
  fetchAllPengaduanService,
  insertPengaduanService,
} from '../services/pengaduan.service';
import { logger } from '../utils/logger';

export const getAllPengaduanController = async (
  req: Request,
  res: Response
) => {
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

export const createPengaduanController = async (
  req: Request,
  res: Response
) => {
  try {
    const results = createPengaduanValidation.safeParse(req.body);
    if (!results.success) {
      logger.error(
        { validationErrors: results.error.errors },
        'Validasi Input Pengaduan Gagal'
      );

      res.status(400).json({
        status: false,
        statusCode: 400,
        message: 'Validasi Input Pengaduan Gagal',
        error: results.error.flatten().fieldErrors,
      });
      return;
    }

    await insertPengaduanService(results.data);
    res.status(201).json({
      status: true,
      statusCode: 201,
      message: 'Data Pengaduan Berhasil Di Tambahkan',
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal Ketika Menambahkan Data Pengaduan',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });

    res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Gagal Menambahkan Data Pengaduan',
      error: error,
    });
  }
};
