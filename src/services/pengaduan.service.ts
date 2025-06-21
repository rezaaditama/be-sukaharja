import { logger } from '../utils/logger';
import { dbPool } from '../config/database';
import { PengaduanModel } from '../models/pengaduan.model';
import { ResultSetHeader } from 'mysql2';

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

export const insertPengaduanService = async (data: PengaduanModel) => {
  const conn = await dbPool.getConnection();
  try {
    const SQLQuery =
      'INSERT INTO pengaduan (jenis_pengaduan, detail_pengaduan) VALUES (?, ?)';
    const [results] = await conn.execute<ResultSetHeader>(SQLQuery, [
      data.jenis_pengaduan,
      data.detail_pengaduan,
    ]);
    return results.insertId;
  } finally {
    conn.release();
  }
};
