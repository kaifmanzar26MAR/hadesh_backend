import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Admin } from "../models/admin.model.js";
import { Hadesh } from "../models/hadesh.model.js";

const AddHadesh = asyncHandler(async (req, res) => {
  const {
    Added_by,
    Book_name,
    Hadesh_no,
    Hadesh_Authenticity,
    Narrated_by,
    Hadesh_category,
  } = req.body;

  if (
    [
      Added_by,
      Book_name,
      Hadesh_no,
      Hadesh_Authenticity,
      Narrated_by,
      Hadesh_category,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(500, "All fields must fill properly");
  }

  const isPresent = await Hadesh.findOne({ Book_name, Hadesh_no });
  if (isPresent) {
    throw new ApiError(500, "Hadesh already exists");
  }
  const createnewHadesh = await Hadesh.create({
    Added_by,
    Book_name,
    Hadesh_no,
    Hadesh_Authenticity,
    Narrated_by,
    Hadesh_category,
  });

  if (!createnewHadesh) {
    throw new ApiError(500, "Something went wrong in adding Hadesh");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createnewHadesh, "Hadesh added Successfully"));
});
export { AddHadesh };
