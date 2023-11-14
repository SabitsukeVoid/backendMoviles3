import { ServicioDevoluciones } from "../services/ServicioDevoluciones.js";
export class ControladorDevoluciones{
    constructor(){

    }

    async buscarTodas(request,response){
        let ServicioDevoluciones=new ServicioDevoluciones();
        try{
            //1. Hay que recibir datos? R: No
            //2. Intentar conectarme a la BD
            //3. Envio la respuesta
            response.status(200).json({
                // "estado" : "true",
                "mensaje" : "Exito buscando los Devoluciones",
                "datos" : await ServicioDevoluciones.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error buscando los Devoluciones: "+error,
                "datos" : null
            })
        }
    }
    async buscarPorId(request,response){
        let ServicioDevoluciones=new ServicioDevoluciones();
        try{
            //1. Hay que recibir datos? R: Si
            //2. Por donde se reciben los datos? Params (URL)
            let id = request.params.id
            //3. Intentar conectarme a la BD y biscar la habitacion con el id
            //4. Envio la respuesta
            response.status(200).json({
                // "estado" : "true",
                "mensaje" : "Exito buscando los Devoluciones",
                "datos" : await ServicioDevoluciones.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error buscando los Devoluciones: "+error,
                "datos" : null
            })
        }
    }
    async modificar(request,response){
        try{
            let ServicioDevoluciones = new ServicioDevoluciones();
            //1. Hay que recibir datos? R: Si
            //2. Por donde se reciben los datos? Params = id, Body = datos de la habitacion
            let id = request.params.id
            let datosModificar = request.body
            //3. Conectarme al BD y mandar los datos recibidos para modificar
            await ServicioDevoluciones.modificar(id, datosModificar) // antes de la respuesta
            //4. Enviar la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito Modificando los Devoluciones",
                "datos" : " " // ver la respuesta de await
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error Modificando los Devoluciones: "+error,
                "datos" : null
            })
        }
    }
    async registrar(request,response){
        let ServicioDevoluciones = new ServicioDevoluciones();
        try{
            //1. Hay que recibir datos? R: Si
            //2. Por donde se reciben los datos? Body = datos de la habitacion
            let datosRegistrar = request.body
            //3. Conectarme al BD y registrar los datos
            // tomar 2 fechas del objeto datos
            // la diferencia en dias de esas dos fechas
            await ServicioDevoluciones.registrar(datosRegistrar)
            //4. Enviar la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito Registrando los Devoluciones",
                "datos" : null,
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error Registrando los Devoluciones: "+error,
                "datos" : null
            })
        }
    }
    async eliminar(request,response){
        let ServicioDevoluciones = new ServicioDevoluciones();
        try{
            //1. Hay que recibir datos? R:Si
            //2. Por donde se reciben los datos? Params = id
            let id = request.params.id
            //3. Conectarme al BD y eliminarlo
            await ServicioDevoluciones.eliminar(id); //eliminar
            //4. Enviar la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito eliminando los Devoluciones",
                "datos" : null
            })

        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error eliminando los Devoluciones: "+error,
                "datos" : null
            })
        }
    }
}