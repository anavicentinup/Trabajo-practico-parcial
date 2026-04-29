  Trabajo Práctico: CLI de Gestión de Usuarios con Node.js y MySQL

# 🧑‍💻 CLI Users App

Aplicación de línea de comandos (CLI) hecha con Node.js para gestionar usuarios en una base de datos MySQL.

Permite:

* Obtener usuarios
* Crear usuarios
* Actualizar usuarios
* Eliminar usuarios


## 🧠 Descripción

Este proyecto es una práctica de backend donde se trabaja con:

* Node.js
* MySQL
* Manejo de argumentos por consola (`process.argv`)
* Queries SQL (CRUD)

---

## ⚙️ Tecnologías

* JavaScript
* Node.js
* MySQL
* mysql2 (promesas: async-await)

---

## 🚀 Instalación

1. Clonar el repositorio: https://github.com/anavicentinup/Trabajo-practico-parcial.git

git clone 

2. Entrar en la carpeta.

3. Instalar dependencias.

npm install

---

## 🗄️ Configuración de base de datos

Crear una base de datos en MySQL llamada:

cli_users

Y una tabla `users`:

```sql
CREATE TABLE users (
  id VARCHAR(40) PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(40) NOT NULL
);
```

Configurar conexión en `config.js`:

* host: localhost
* user: root
* password: (vacío "" o el tuyo)
* database: cli_users

---

## ▶️ Uso

Ejecutar comandos desde la terminal o accediendo desde la carpeta app.js con la terminal

### 📌 Obtener usuarios

npm run dev get

---

### ➕ Crear usuario

npm run dev add username email password

Ejemplo:
node app.js add Anabella ana@gmail.com pepe12345

Validaciones:

* Username solo letras, puede ser nombre y apellido entre "".
* Email debe ser @gmail.com, @hotmal.com o @icloud.com.
* Password mínimo 8 caracteres.
* Todos los datos son requeridos.
---

### ✏️ Actualizar usuario

npm run dev update username email password id

Ejemplo:
node app.js update "anabella Vicentin" ana@gmail.com pepe12345 (id:**********)
sugerencia: solicitar la lista con "get" para modificar el correcto id.
---

### ❌ Eliminar usuario

npm run dev delete username

Ejemplo:
node app.js delete (nombre completo) "anabella vicentin"
sugerencia: solicitar la lista con "get" para eliminar el correcto.

---

## 📂 Estructura del proyecto

* app.js → lógica principal y CLI → manejo de argumentos y ejecucion de operaciones.
* controls.js → funciones CRUD → lógica de negocio
* config.js → conexión a base de datos
* package.json → configuración del proyecto

---

## 🧪 Estado

🚧 En desarrollo (proyecto de práctica)

---

## 👤 Autor: Anabella Vicentin.
## 👤 Profesor: Gabriel Alberini.
