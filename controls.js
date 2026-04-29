import { db } from "./config.js"//-> conectamos con la base de datos

//DECLARACION DE FUNCION OBTENER USUARIOS
const getUsers = async () => {
    const q = `SELECT * FROM users` // sentencia sql para obtener todos los usuarios de la tabla users
    const [response] = await db.query(q)
    if (response.length === 0) {
        return "No tienes ningun contacto"
    }
    return response
}

//DECLARACION DE FUNCION CREAR UN USUARIO
const createUsers = async (username, email, password) => {
    // VALIDACIONES:  
    if (username === undefined || email === undefined || password === undefined) {
        return "Datos INVALIDOS!!...los datos estan incorrectos"
    }

     const soloLetras =  /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!soloLetras.test(username)) {
        return "El username solo puede tener caracteres alfabeticos";
    }

    if (password.length < 8) {
        return "tu contraseña debe tener como minimo 8 caracteres"
    }
   
    if (!email.includes("@") || !email.endsWith("@gmail.com") && !email.endsWith("@hotmail.com") && !email.endsWith("@icloud.com")) {
        return "ERROR!! email invalido"
    }
    //PERSISTIR EN BASE DE DATOS:
    // const newUsers = {
    //     id: crypto.randomUUID(),
    //     username: username,
    //     email: email,
    //     password: password
    // }

    const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)` //query => consulta a una db
    const [response] = await db.query(q, [crypto.randomUUID(), username, email, password]) //Ejecutá la consulta q en la base de datos, reemplazando los ? con estos valores, y esperá a que termine antes de continuar
    if (response.serverStatus === 2) {
        return "Usuario creado con exito!!"
    } else {
        return "Error al crear el usuario"
    }
}

const updateUsers = async (id, update) => {

    if (!id) {
        return "Id requerido!"
    }

    const q = `
    UPDATE users 
    SET username = ?, email = ?, password = ?
    WHERE id = ?
    `;
    const { username, email, password } = update
    const [response] = await db.query(q, [
        username,
        email,
        password,
        id,
    ]);

    if (response.affectedRows === 1) {
        return "Usuario actualizado";
    } else {
        return "Usuario no encontrado";
    }
}
const deleteUsers = async (username) => {
    const q = `DELETE FROM users WHERE username = ?`
    const [response] = await db.query(q, [username])
    if (response.affectedRows === 1) {
        return "Usuario eliminado con éxito";
    } else {
        return "Usuario no encontrado";
    }

}

export { getUsers, createUsers, updateUsers, deleteUsers }