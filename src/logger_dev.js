import winston from "winston";

const customLevelOptions = {
  levels: {
    fatal: 0,
    error: 1,
    warning: 2,
    info: 3,
    http: 4,
    debug: 5,
  },
};

const logger = winston.createLogger({
  levels: customLevelOptions.levels,
  level: "debug",
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(winston.format.simple()),
    }),
  ],
});

export const addLoggerDev = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`Metodo: ${req.method} URL: ${req.url}`);
  next();
};
