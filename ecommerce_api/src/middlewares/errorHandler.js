const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: 'error',
        statusCode: statusCode,
        message: err.message,
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export default errorHandler;