import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "As you Grow You Change, as You Change You Grow",
  });
});

export default registerUser;
