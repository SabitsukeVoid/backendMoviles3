import { modeloDevoluciones} from "../models/modeloDevoluciones.js"
export class ServicioDevoluciones {
    constructor() {}

    async buscarTodas(){
        let Devoluciones=await modeloDevoluciones.find()
        return Devoluciones
    }
    async buscarPorId(id){
        let Devolucion=await modeloDevoluciones.findById(id)
        return Devolucion
    }
    async modificar(id,datos){
        return await modeloDevoluciones.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let devolucionNueva=new modeloDevoluciones(datos)
        return await devolucionNueva.save()
    }
    // completar
    async eliminar(id){
        let eliminar=await modeloDevoluciones.deleteOne({ "_id" : id })
        return eliminar
            
    } 
    
}