import Log from '../models/Log.js';

const loggerMiddleware = async (req, res, next) => {
  const logObj = {
    method: req.method,
    url: req.url,
    params: req.params,
    date: new Date(),
  };
  console.log(logObj);

  try {
    await Log.create(logObj);
  } catch (error) {
    console.error('Error saving log:', error);
  }

  next();
};

export default loggerMiddleware;
