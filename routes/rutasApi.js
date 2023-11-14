//Espacio para definir las rutas o endpoints especificaos de su API

import express from "express";

export let rutasAPI = express.Router();

//Importo los controladorec
import { ControladorUsuarios} from "../controllers/ControladorUsuarios.js";
let controladorUsuarios = new ControladorUsuarios()

import { ControladorCarros} from "../controllers/ControladorCarros.js";
let controladorCarros = new ControladorCarros()

import { ControladorRentas} from "../controllers/ControladorRentas.js";
let controladorRentas = new ControladorRentas()

import { ControladorDevoluciones} from "../controllers/ControladorDevoluciones.js";
let controladorDevoluciones = new ControladorDevoluciones()

//Aca pone sus ENDPOINTS

//Usuarios

rutasAPI.post("/api/usuarios", controladorUsuarios.registrar);

rutasAPI.get("/api/usuarios", controladorUsuarios.buscarTodas);

rutasAPI.get("/api/usuario/:id", controladorUsuarios.buscarPorId);

rutasAPI.put("/api/usuarios/:id", controladorUsuarios.modificar);

rutasAPI.delete("/api/usuarios/:id", controladorUsuarios.eliminar);

//Carros

rutasAPI.post("/api/carros", controladorCarros.registrar);

rutasAPI.get("/api/carros", controladorCarros.buscarTodas);

rutasAPI.get("/api/carro/:id", controladorCarros.buscarPorId);

rutasAPI.put("/api/carros/:id", controladorCarros.modificar);

rutasAPI.delete("/api/carros/:id", controladorCarros.eliminar);

//Rentas

rutasAPI.post("/api/rentas", controladorRentas.registrar);

rutasAPI.get("/api/rentas", controladorRentas.buscarTodas);

rutasAPI.get("/api/renta/:id", controladorRentas.buscarPorId);

rutasAPI.put("/api/rentas/:id", controladorRentas.modificar);

rutasAPI.delete("/api/rentas/:id", controladorRentas.eliminar);


//Devoluciones

rutasAPI.post("/api/devoluciones", controladorDevoluciones.registrar);

rutasAPI.get("/api/devoluciones", controladorDevoluciones.buscarTodas);

rutasAPI.get("/api/devolucion/:id", controladorDevoluciones.buscarPorId);

rutasAPI.put("/api/devoluciones/:id", controladorDevoluciones.modificar);

rutasAPI.delete("/api/devoluciones/:id", controladorDevoluciones.eliminar);
