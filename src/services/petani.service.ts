import { logger } from '../utils/logger';
import { dbPool } from '../config/database';
export const fetchAllPetaniService = async () => {
  const SQLQuery = 'SELECT nik, alamat, nama, status, nama_bunga FROM petani';

  try {
    const [results] = await dbPool.execute(SQLQuery);
    return results;
  } catch (error) {
    logger.error({
      msg: 'Error saat query ke database',
      error,
      function: 'fetchAllPetaniService',
    });
    throw error;
  }
};
