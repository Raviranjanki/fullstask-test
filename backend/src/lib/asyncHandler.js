export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        const code = error.code > 500 ? 500 : error.code || 500;
        res.status(code).json({
            success: false,
            message: error.message,
        });
    }
};
