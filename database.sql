//POR SI NO VIO AUN EN EL README.md...

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

