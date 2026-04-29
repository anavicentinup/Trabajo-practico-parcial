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
* mysql2 (promesas)

---

## 🚀 Instalación

1. Clonar el repositorio: https://github.com/anavicentinup/Trabajo-practico-parcial.git

git clone 

2. Entrar en la carpeta: cd App.js

3. Instalar dependencias:

npm install

---

## 🗄️ Configuración de base de datos

Crear una base de datos en MySQL llamada:

cli_users

Y una tabla `users`:

```sql
CREATE TABLE users (
  id VARCHAR(100) PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100)
);
```

Configurar conexión en `config.js`:

* host: localhost
* user: root
* password: (vacío o el tuyo)
* database: cli_users

---

## ▶️ Uso

Ejecutar comandos desde la terminal:

### 📌 Obtener usuarios

node app.js get

---

### ➕ Crear usuario

node app.js add username email password

Ejemplo:
node app.js add Anabella ana@gmail.com pepe12345

Validaciones:

* Username solo letras
* Email debe ser @gmail.com
* Password mínimo 8 caracteres

---

### ✏️ Actualizar usuario

node app.js update username email password id

Ejemplo:
node app.js update "anabella Vicentin" ana@gmail.com pepe12345 (id:**********)

---

### ❌ Eliminar usuario

node app.js delete username

Ejemplo:
node app.js delete (nombre completo) "anabella vicentin"

---

## 📂 Estructura del proyecto

* app.js → lógica principal y CLI
* controls.js → funciones CRUD
* config.js → conexión a base de datos
* package.json → configuración del proyecto

---

## 🧪 Estado

🚧 En desarrollo (proyecto de práctica)

---

## 👤 Autor: Anabella Vicentin.
## 👤 Profesor: Gabriel Alberini.
