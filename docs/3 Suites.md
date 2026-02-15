# Identificación de suites

## Suite de Smoke
| ID | Descripción |
| :---- | :---- |
| TC-01 | Inicio de sesión exitoso |
| TC-04 | Usuario deshabilitado |
| TC-13 | Agregar un ítem al carrito |
| TC-16 | Remover un ítem desde el carrito de compras |
| TC-20 | Iniciar checkout  |

### Justificación:
Si no funciona el login no se puede acceder al sistema.
Se valida también el funcionamiento de usuarios deshabilitados y salteo de login por seguridad

Del carrito de compras se agregan los que prueban el flujo básico para validar que siga operativo.

---

## Suite de Regresión
| ID | Descripción |
| :---- | :---- |
| TC-01 | Inicio de sesión exitoso |
| TC-02 | Usuario incorrecto |
| TC-04 | Usuario deshabilitado |
| TC-11 | Acceso directo a URL privada |
| TC-12 | Validación mensaje de error por MS caído |
| TC-13 | Agregar un ítem al carrito |
| TC-14 | Agregar varios ítems al carrito |
| TC-15 | Remover un ítem desde el inventario |
| TC-16 | Remover un ítem desde el carrito de compras |
| TC-17 | Abrir ítem desde el carrito de compras |
| TC-19 | Iniciar el checkout |
| TC-20 | Iniciar el checkout con en el carrito vacío  |
| TC-21 | Refrescar página y mantener estado del carrito |

### Justificación:
Además de los casos de smoke agrego casos representativos y críticos de las funcionalidades para validar que el sistema no se rompa luego de realizar cambios. Excluyendo los casos bordes o específicos que fueron usados para la prueba funcional.