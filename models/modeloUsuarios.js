import mongoose from "mongoose";
const Schema=mongoose.Schema;
const Usuarios=new Schema({
    "username":{
        type: String,
        required:true
    },
    "name":{
        type:String,
        required:true
    },
    "reservword":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    },
    "role":{
        type:String,
        required:true
    }
})

export const modeloUsuarios=mongoose.model('Usarios',Usuarios)