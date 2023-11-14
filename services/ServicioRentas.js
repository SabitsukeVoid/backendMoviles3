import { modeloRentas} from "../models/modeloRentas.js"
export class ServicioRentas {
    constructor() {}

    async buscarTodas(){
        let Rentas=await modeloRentas.find()
        return Rentas
    }
    async buscarPorId(id){
        let Renta=await modeloRentas.findById(id)
        return Renta
    }
    async modificar(id,datos){
        return await modeloRentas.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let rentaNueva=new modeloRentas(datos)
        return await rentaNueva.save()
    }
    // completar
    async eliminar(id){
        let eliminar=await modeloRentas.deleteOne({ "_id" : id })
        return eliminar
            
    } 
    
}