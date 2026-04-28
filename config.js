import mysql from 'mysql2/promise';//Conecta app de Node.js y la base de datos msql, utiliza promesas
const db = mysql.createPool({ // crea una grupo de conexiones + rapido + varias consultas al mismo tiempo
    host: "localhost", // donde esta la db (compu local)
    user: "root", // usuario de Mysql
    password: "", // contraseña suele estar vacia
    database: "cli_users", //nombre de la db que creaste
    waitForConnections: true, //Si todas las conexiones están ocupadas: true → espera turno ✅
    connectionLimit: 10 //Máximo de conexiones simultáneas
})

export {db}