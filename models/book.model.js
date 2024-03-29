import mongoose, {Schema} from 'mongoose';

const bookSchema = new Schema({
title:{
    type: String,
    required: true,
},
author: {
    type: String,
    required: true,
},
year: {
    type: String,
    required: true,
},
description:{
    type:String,
    default: " a good book",
}

},{
    timestamps:true
})



export const Book = mongoose.model("Book",bookSchema);

