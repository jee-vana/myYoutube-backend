const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// // Method two

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next); // Calls the asynchronous route handler function (fn)
//     } catch (error) {
//         // If an error occurs during the execution of the route handler:
//         res.status(err.code || 500).json({ // Sets the response status code to the error's code or 500 (Internal Server Error)
//             success: false, // Indicates that the request was not successful
//             message: err.message // Sets the response message to the error's message
//         });
//     }
// };
