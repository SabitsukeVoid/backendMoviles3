import { modeloCarros} from "../models/modeloCarros.js"
export class ServicioCarros {
    constructor() {}

    async buscarTodas(){
        let Carros=await modeloCarros.find()
        return Carros
    }
    async buscarPorId(id){
        let Carro=await modeloCarros.findById(id)
        return Carro
    }
    async modificar(id,datos){
        return await modeloCarros.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let carroNuevo=new modeloCarros(datos)
        return await carroNuevo.save()
    }
    // completar
    async eliminar(id){
        let eliminar=await modeloCarros.deleteOne({ "_id" : id })
        return eliminar
            
    } 
    
}