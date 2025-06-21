import { logger } from '../utils/logger';
import { dbPool } from '../config/database';
export const fetchAllBungaService = async () => {
  const SQLQuery =
    'SELECT bunga_id, nama_bunga, manfaat, path, jenis_bunga FROM bunga';

  try {
    const [results] = await dbPool.execute(SQLQuery);
    return results;
  } catch (error) {
    logger.error({
      msg: 'Error saat query ke database',
      error,
      function: 'fetchAllBungaService',
    });
    throw error;
  }
};
