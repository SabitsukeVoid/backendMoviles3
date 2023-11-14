import mongoose from "mongoose";
import { boolean } from "webidl-conversions";
const Schema=mongoose.Schema;
const Rentas=new Schema({
    "rentnumber":{
        type: String,
        required:true
    },
    "username":{
        type:String,
        required:true
    },
    "platenumber":{
        type:String,
        required:true
    },
    "initialdate":{
        type:String,
        required:true
    },
    "finaldate":{
        type:String,
        required:true
    },
    "status":{
        type:Boolean,
        required:true
    }
})

export const modeloRentas=mongoose.model('Rentas',Rentas)