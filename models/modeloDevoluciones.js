import mongoose from "mongoose";
import { boolean } from "webidl-conversions";
const Schema=mongoose.Schema;
const Devoluciones=new Schema({
    "returnnumber":{
        type: String,
        required:true
    },
    "rentnumber":{
        type:String,
        required:true
    },
    "returndate":{
        type:String,
        required:true
    }
})

export const modeloDevoluciones=mongoose.model('Devoluciones',Devoluciones)