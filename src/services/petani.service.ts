import { logger } from '../utils/logger';
import { dbPool } from '../config/database';
import { PetaniModel } from '../models/petani.model';
import { ResultSetHeader } from 'mysql2';

export const fetchAllPetaniService = async () => {
  const SQLQuery =
    'SELECT nik_petani, alamat_petani, nama_petani, status, nama_bunga FROM petani';

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

export const insertPetaniService = async (data: PetaniModel) => {
  const conn = await dbPool.getConnection();
  try {
    const SQLQuery =
      'INSERT INTO petani (nik_petani, alamat_petani, nama_petani, nama_bunga) VALUES (?, ?, ?, ?)';

    const [results] = await conn.execute<ResultSetHeader>(SQLQuery, [
      data.nik_petani,
      data.alamat_petani,
      data.nama_petani,
      data.nama_bunga,
    ]);
    return results;
  } finally {
    conn.release();
  }
};

export const updatePetaniService = async (id: number) => {
  const conn = await dbPool.getConnection();
  try {
    const SQLQuery = 'UPDATE petani SET status = ? WHERE nik_petani = ?';
    const [results] = await conn.execute<ResultSetHeader>(SQLQuery, [true, id]);
    return results.affectedRows;
  } finally {
    conn.release();
  }
};

export const deletePetaniService = async (id: number) => {
  const conn = await dbPool.getConnection();
  try {
    const SQLQuery = 'DELETE FROM petani WHERE nik_petani = ?';
    const [results] = await conn.execute<ResultSetHeader>(SQLQuery, [id]);
    return results.affectedRows;
  } finally {
    conn.release();
  }
};
