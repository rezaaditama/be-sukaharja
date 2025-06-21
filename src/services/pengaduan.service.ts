import { logger } from '../utils/logger';
import { dbPool } from '../config/database';

export const fetchAllPengaduanService = async () => {
  const SQLQuery =
    'SELECT pengaduan_id, jenis_pengaduan, detail_pengaduan, waktu_pengaduan, status_pengaduan FROM pengaduan';

  try {
    const [results] = await dbPool.execute(SQLQuery);
    return results;
  } catch (error) {
    logger.error({
      msg: 'Error saat query ke database',
      error,
      function: 'fetchAllPengaduanService',
    });
    throw error;
  }
};
