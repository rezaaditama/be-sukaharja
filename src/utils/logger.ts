import pino from 'pino';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'yyyy-mm-dd HH:MM:ss',
      colorize: true,
      ignore: 'pid, hostname',
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});
