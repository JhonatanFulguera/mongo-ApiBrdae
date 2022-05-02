import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {
        type: String, 
        required:true
    },
    category: {type:String, required:true},
    description: {type:String, required:true},
    images: {type:Array},
    //isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: new Date()},
    updatedAt: { type: Date},
    deletedAt: { type: Date, default: null} //soft Delete
},{ versionKey: false});

const Product = mongoose.model("Product", schema);

export default Product;
