import mongoose, {Schema} from 'mongoose'

const hadeshschema=new Schema({
    Added_by:{
        type:Schema.Types.ObjectId,
        ref:"Admin",
        required:true
    },
    Book_name:{
        type: String,
        required: true
    },
    Hadesh_no:{
        type:String,
        required:true
    },
    Hadesh_Authenticity:{
        type:String,
        required:true,
    },
    Narrated_by:{
        type:String,
        required:true,
    },
    Hadesh_category:{
        type:String,
        required:true
    }
},{
    timestamps:true,
});

export const Hadesh = mongoose.model("Hadesh",hadeshschema);