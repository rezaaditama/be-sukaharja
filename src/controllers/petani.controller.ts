import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import {
  fetchAllPetaniService,
  insertPetaniService,
  updatePetaniService,
} from '../services/petani.service';
import { createPetaniValidation } from '../validations/petani.validation';

export const getAllPetaniController = async (req: Request, res: Response) => {
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

export const insertPetaniController = async (req: Request, res: Response) => {
  try {
    const results = createPetaniValidation.safeParse(req.body);

    if (!results.success) {
      logger.error(
        { validationErrors: results.error.errors },
        'Validasi Input Petani Gagal'
      );

      res.status(400).json({
        status: false,
        statusCode: 400,
        message: 'Validasi Input Petani Gagal',
        error: results.error.flatten().fieldErrors,
      });
      return;
    }

    const insertId = await insertPetaniService(results.data);
    res.status(201).json({
      status: true,
      statusCode: 201,
      message: 'Data Petani Berhasil Di Tambahkan',
      data: {
        id: insertId,
      },
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal Ketika Menambahkan Data Petani',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });

    res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Gagal Menambahkan Data Petani',
      error: error,
    });
  }
};

export const updatePetaniController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      logger.info('ID Harus Berupa Angka');
      res.status(400).json({
        status: false,
        statusCode: 400,
        message: 'ID Harus Berupa Angka',
      });
      return;
    }

    const affectedRows = await updatePetaniService(id);
    if (affectedRows === 0) {
      logger.info('Data Petani Tidak Ditemukan');
      res.status(404).json({
        status: false,
        statusCode: 404,
        message: `Data Petani Tidak Ditemukan`,
      });
      return;
    }
    logger.info('Data Petani Telah Di Perbarui');
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'Data Petani Telah Di Perbarui',
    });
  } catch (error) {
    logger.error({
      msg: 'Gagal Memperbarui Data Petani',
      error,
      endpoint: req.originalUrl,
      method: req.method,
    });
    res.status(500).json({
      status: false,
      statusCode: 500,
      message: 'Data Petani Gagal Diperbarui',
      error: error,
    });
    return;
  }
};
