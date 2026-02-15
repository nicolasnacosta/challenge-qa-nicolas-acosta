# No se puede eliminar un ítem desde la página de productos

### ID: BUG-01

### Descripcion
Al presionar el botón “Remove” desde la página de productos, el sistema no elimina el ítem previamente agregado y tampoco actualiza el contador.

### Ambiente
Entorno: QA
Navegador: Brave v1.87.188
Sistema operativo: Windows 11

### Datos de la prueba
- Url: [saucedemo](https://www.saucedemo.com)
- usuario: error_user
- contraseña: secret_sauce

### Pasos de la prueba
Iniciar sesión en el portal.
Presionar el botón "Add to cart" de un producto.
Presionar el botón "Remove" del producto agregado.

### Resultado esperado
El producto debe eliminarse del carrito y el contador del carrito debe disminuir en una unidad.

### Resultado obtenido
El sistema no reacciona al hacer click en el botón Remove.
El producto permanece agregado y el contador no se actualiza.

### Evidencia:
[imagen]

### Severidad
Alta

### Prioridad
Alta
