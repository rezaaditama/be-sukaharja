import { logger } from '../utils/logger';
import { dbPool } from '../config/database';
import { RowDataPacket } from 'mysql2';

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

export const fetchBungaByIdService = async (id: number) => {
  const SQLQuery = `SELECT bunga_id, nama_bunga, manfaat, path, jenis_bunga FROM bunga WHERE bunga_id = ?`;

  try {
    const [results] = await dbPool.execute<RowDataPacket[]>(SQLQuery, [id]);
    return results[0];
  } catch (error) {
    logger.error({
      mg: 'Error saat query ke database',
      function: 'fetchBungaByIdService',
    });
    throw error;
  }
};
