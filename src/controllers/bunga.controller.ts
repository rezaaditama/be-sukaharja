import { Request, Response } from 'express';
import { createBungaValidation } from '../validations/bunga.validation';
import { logger } from '../utils/logger';

export const createProduct = (req: Request, res: Response) => {
  const result = createBungaValidation.safeParse(req.body);

  if (!result.success) {
    logger.error({ errors: result.error.errors }, 'validation error');
    res.status(400).json({
      status: false,
      statusCode: 400,
      errors: result.error.errors,
    });
    return;
  }
  logger.info('Success add new bunga');
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'Add Data Bunga Success',
    data: result.data,
  });
};

export const getAllBunga = (req: Request, res: Response) => {
  logger.info('data bunga dikirim');
  res
    .status(200)
    .send({ status: true, statusCode: 200, data: [{ name: 'sepatu' }] });
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

// export const getBungaByName = (req: Request, res: Response) => {
//   const dataBunga = [
//     {
//       id: 2,
//       name: 'Mawar',
//     },
//     {
//       id: 3,
//       name: 'Anggrek',
//     },
//   ];

//   const name = req.params.name;

//   if (name) {
//     const filterBungaByName = dataBunga.filter(
//       (flower) => flower.name.toLowerCase() === name.toLowerCase()
//     );
//     logger.info('Data bunga dikirim berdasarkan nama');
//     res.status(200).send({ status: true, statusCode: 200, filterBungaByName });
//     return;
//   }
//   logger.info('Data bunga dikirim berdasarkan nama tidak ada');
//   res.status(200).send({ status: true, statusCode: 200, dataBunga });
// };
