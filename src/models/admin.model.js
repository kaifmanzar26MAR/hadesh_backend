import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const adminschema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})



adminschema.pre('save', async function () {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        console.log("Password hashed:", this.password);
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error; 
    }
});

export const Admin = mongoose.model("Admin",adminschema)