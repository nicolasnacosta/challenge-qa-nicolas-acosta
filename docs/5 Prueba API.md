### Analisis
Al momento de tener que probar una API primero analizaría la documentación: 
- endpoints y métodos disponibles
- parámetros, headers, estructuras de request y response (schema)
- datos requeridos
- códigos de respuestas esperados

### Definición
Definir los distintos casos de prueba positivos y negativos validando:
- Request válido con respuesta 200 OK o 201 Created
- Request con datos inválidos con respuesta 400 Bad request
- Sin autorización con respuesta 401 Unauthorized
- Distintos errores 404, 405, 409 para validar el estándar de errores
- Sin enviar datos requeridos

### Preparación del entorno 
- Definir ambiente de prueba
- Configurar Postman creando una colección para almacenar las peticiones
- Agregar scripts de pre y post request generales a toda la colección

### Diseño de los casos de prueba
- Crear una petición para cada caso definiendo el método, url, parámetros, headers, body y post script para validar el status code y el response body

### Ejecución
Puedo ejecutar manualmente cada petición 
O puedo ejecutar la colección para que corran todas las peticiones.

### Reporte 
Registrar si hubo errores.
Generar un informe de ejecución.
