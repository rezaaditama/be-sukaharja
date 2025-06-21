import { logger } from '../utils/logger';
import { dbPool } from '../config/database';

export const fetchAllUserService = async () => {
  const SQLQuery =
    'SELECT user_id, user_nama, role, user_nik, password FROM users';

  try {
    const [results] = await dbPool.execute(SQLQuery);
    return results;
  } catch (error) {
    logger.error({
      msg: 'Error saat query ke database',
      error,
      function: 'fetchAllUserService',
    });
    throw error;
  }
};
