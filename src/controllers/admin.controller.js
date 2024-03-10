import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Admin } from "../models/admin.model.js";

const CreateAdmin = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        phone,
        password
    }= req.body;

    if(
        [name, email, password].some((field)=>field?.trim()==='') || phone.toString()===''
    ){
        throw new ApiError(500, "All fields must fill properly")
    }

    const isPresent = await Admin.findOne({ $or: [{ email: email }, { phone: phone }] });
    if(isPresent){
        throw new ApiError(500, "Admin already exists");
    }
    const createnewAdmin=await Admin.create({
        name, email, phone, password
    });

    if(!createnewAdmin){
        throw new ApiError(500, "Something went wrong in createing of Admin")
    }

  return res.status(201).json(new ApiResponse(200,createnewAdmin, "Admin created Successfully"));
});
export { CreateAdmin };
