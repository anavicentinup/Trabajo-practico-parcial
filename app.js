import {getUsers, createUsers, updateUsers, deleteUsers} from "./controls.js"

const argv = process.argv
const params = argv.slice(2)//-> elimina los dos primeros argumentos que son node y la ruta
console.log("seleccionaste la operacion =>",params[0])//-> deja a la operacion en primer lugar
let resultado  
const operacion = params[0]

switch(operacion){
    case "get":
        resultado = await getUsers()
        break
    case "add":
        resultado = await createUsers(params[1],params[2],params[3])
        break
    case "update":
        const update = {username: params[1], email: params[2], password: params[3]}
        resultado = await updateUsers(params[4], update)
        break
    case "delete":
        resultado = await deleteUsers(params[1])
        break
    default:
        resultado = "operacion invalida"

}

const main = () =>{
    console.log(resultado)
}

main()