import { modeloUsuarios } from "../models/modeloUsuarios.js"
export class ServicioUsuarios {
    constructor() {}

    async buscarTodas(){
        let Usuarios=await modeloUsuarios.find()
        return Usuarios
    }
    async buscarPorId(id){
        let Usuario=await modeloUsuarios.findById(id)
        return Usuario
    }
    async modificar(id,datos){
        return await modeloUsuarios.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let usuarioNuevo=new modeloUsuarios(datos)
        return await usuarioNuevo.save()
    }
    // completar
    async eliminar(id){
        let eliminar=await modeloUsuarios.deleteOne({ "_id" : id })
        return eliminar
            
    } 
    
}