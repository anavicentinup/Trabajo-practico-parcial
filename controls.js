import { db } from "./config.js"//-> conectamos con la base de datos

//VARIABLES PARA VALIDAR DATOS:
const dominiosValidos = ["@gmail.com", "@hotmail.com", "@icloud.com"];
const soloLetras = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

//FUNCION QUE RECICLO PARA OBTENER Y AGREGAR USUARIOS:
const validadordeDatos =(username, email, password) =>{
    if (username === undefined || email === undefined || password === undefined) {
        return "ERROR!! todos los campos son requeridos"
    }

    if (!soloLetras.test(username)) {
        return "ERROR!! El username solo puede tener caracteres alfabeticos";
    }

    if (password.length < 8) {
        return "ERROR!! Tu contraseña debe tener como minimo 8 caracteres"
    }

    if (!email.includes("@") || !dominiosValidos.some(domain => email.endsWith(domain))) {
        return "ERROR!! Email invalido"
    }

    return null
}

//DECLARACION DE FUNCION OBTENER USUARIOS
const getUsers = async () => {
    const q = `SELECT * FROM users` // sentencia sql para obtener todos los usuarios de la tabla users
    const [response] = await db.query(q)
    return response.length === 0 ? "No tienes ningun contacto" : response 
}
   

//DECLARACION DE FUNCION CREAR UN USUARIO
const createUsers = async (username, email, password) => {
    // VALIDACIONES:  
    const error = validadordeDatos(username, email, password)
    if (error) return error
        
    const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)` // sentencia sql para crear un usuario en la tabla users
    const [response] = await db.query(q, [crypto.randomUUID(), username, email, password]) 

    return response.serverStatus === 2 ? "usuario creado con Exito" : "Error!! usuario no creado"
}

//DECLARACION DE FUNCION ACTUALIZAR USUARIOS:
const updateUsers = async (id, update) => {
    if (!id) {
        return "Id requerido!"
    }
    const { username, email, password } = update

    const error = validadordeDatos(username, email, password)
    if (error) return error

    const q = `
    UPDATE users 
    SET username = ?, email = ?, password = ?
    WHERE id = ?
    `; // sentencia sql para modificar un usuario de la tabla users

    const [response] = await db.query(q, [
        username,
        email,
        password,
        id,
    ]);
    return response.affectedRows === 1 ? "Usuario actualizado" : "Usuario no encontrado" 
    }

//DECLARACION DE FUNCION ELIMINAR USUARIOS:
const deleteUsers = async (id) => {
    const q = `DELETE FROM users WHERE id = ?`
    const [response] = await db.query(q, [id])
    if (response.affectedRows === 1) {
        return "Usuario eliminado con éxito";
    } else {
        return "Usuario no encontrado";
    }
}

export { getUsers, createUsers, updateUsers, deleteUsers }