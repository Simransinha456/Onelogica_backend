/*Not Found Error Handler */

const notFound = (req, res, next) => {
    const error= new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};


/* Global Error Handler */

const handleError = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode :500;
    res.status(statusCode);
    res.json({
        status:false,
        message:err?.message,
        stack: err?.stack,
    });
};

module.exports = {handleError, notFound};