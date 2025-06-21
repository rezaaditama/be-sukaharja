import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { fetchAllBungaService } from '../services/bunga.service';

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

export const getBungaById = (req: Request, res: Response): void => {
  const dataBunga = [
    {
      id: 0,
      name: 'Bunga Edelweis',
    },
    {
      id: 2,
      name: 'Bunga Mawar',
    },
    {
      id: 3,
      name: 'Bunga Anggrek',
    },
  ];

  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    logger.info('Id harus berupa angka');
    res.status(404).send({
      status: false,
      statusCode: 404,
      data: {},
      message: 'ID harus berupa angka',
    });
  }

  const filterBungaById = dataBunga.filter((flower) => flower.id === id);

  if (filterBungaById.length === 0) {
    logger.info('Data Tidak ada');
    res.status(404).send({
      status: false,
      statusCode: 404,
      data: {},
      message: 'Data tidak ditemukan',
    });
  }

  logger.info('Mengirim data bunga sesuai id');
  res.status(200).send({
    status: true,
    statusCode: 200,
    filterBungaById,
    message: 'Data bunga sesuai Id',
  });
};
