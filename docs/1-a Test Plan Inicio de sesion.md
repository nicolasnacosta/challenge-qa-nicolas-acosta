# Plan de pruebas de Inicio de sesión

### objetivo:
Validar el correcto funcionamiento del proceso de autenticación mediante usuario y contraseña, asegurando control de acceso, manejo adecuado de errores.

### Alcance de las pruebas:
- Se incluyen los escenarios positivos y negativos.
- No se incluyen pruebas de logout ni gestión avanzada de sesión (fuera del alcance del login).

### Entorno de Pruebas:
- Entorno: QA
- Url: [saucedemo](https://www.saucedemo.com)
- Usuarios de prueba activos y deshabilitados

### Casos de prueba:


| ID | Descripción | Responsable | prioridad | Estado |
| :---- | :---- | :---- | :---- | :---- |
| TC-01 | Inicio de sesión exitoso | Nicolas | Alta |  |
| TC-02 | Usuario incorrecto | Nicolas | Alta |  |
| TC-03 | Contraseña incorrecta | Nicolas | Alta |  |
| TC-04 | Usuario deshabilitado | Nicolas | Alta |  |
| TC-05 | Validación de campos vacíos | Nicolas | Media |  |
| TC-06 | Usuario vacío | Nicolas | Media |  |
| TC-07 | Contraseña vacía | Nicolas | Media |  |
| TC-08 | Usuario con espacios al inicio o final | Nicolas | Media |  |
| TC-09 | Límite de caracteres | Nicolas | Media |  |
| TC-10 | Contraseña con caracteres especiales | Nicolas | Media |  |
| TC-11 | Acceso directo a URL privada | Nicolas | Alta |  |
| TC-12 | Validación mensaje de error por MS caído | Nicolas | Media |  |