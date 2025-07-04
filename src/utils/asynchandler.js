// A higher-order function that catches async errors in route handlers
const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      // Attempt to run the actual async controller function
      await fn(req, res, next);
    } catch (error) {
      // If an error occurs, pass it to Express's error handler
      next(error);
    }
  };
};

export { asyncHandler };
