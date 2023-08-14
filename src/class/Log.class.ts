import { createLogger, transports, format } from 'winston';
import { RetornoStatus } from '../global/StatusTypes';

const myFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${JSON.stringify(message)}`;
});

export default class LogsClass {
  static setLogger(idLoja: number, response: any) {
    const date: Date = new Date();
    const month = date.getMonth() + 1;
    const nomeArquivo = `${idLoja}-${date.getFullYear()}-${month}.log`;

    const logger = createLogger({
      level: 'silly',
      transports: [
        new transports.Console(),
        new transports.File({ filename: `logs/${nomeArquivo}` }),
      ],
      format: format.combine(
        format.label({ label: nomeArquivo }),
        format.timestamp(),
        myFormat,
      ),
    });
    if (response.status === RetornoStatus.RespostaSucesso) {
      logger.info({ response });
    } else {
      logger.error({ response });
    }
  }
}
