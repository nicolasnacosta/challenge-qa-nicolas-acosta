# Saucedemo challenge (Cypress + JS)
Este proyecto es un framework de automatización de pruebas E2E para el flujo de compra, diseñado bajo el patrón Page Object Model (POM) y principios SOLID.

## Requisitos Previos
Antes de instalar el proyecto, asegúrate de tener instalado:

- Node.js (Versión 18 o superior recomendada)
- npm (Viene con Node.js)

### Git

**Instalación**

Clonar el repositorio:

```Bash
git clone https://github.com/nicolasnacosta/challenge-qa-nicolas-acosta.git
cd challenge-qa-nicolas-acosta
```

**Instalar dependencias:**

```Bash
npm install
```
Esto instalará Cypress, el reporter de JUnit y las utilidades necesarias.

## Estructura del Proyecto
- cypress/e2e: Scripts de prueba (Login, Inventory, Cart).
- cypress/support/pages: Page Objects (Lógica de interactores).
- cypress/support/components: Componentes compartidos (Navbar).
- cypress/support/services: Integraciones con servicios externos (ej. MercadoLibre).
- cypress/fixtures: Datos de prueba estáticos (JSON).

## Ejecución de Pruebas
### Modo Interactivo (Cypress Open)
Para abrir el Test Runner y ejecutar pruebas visualmente:

```Bash
npx cypress open 
```
o
```Bash
npm run cy:open 
```
### Modo Headless (Cypress Run)

Para ejecutar todas las pruebas en segundo plano (ideal para CI/CD):

```Bash
npx cypress run
```
o
```Bash
npm run cy:run 
```
### Modo run headed, con distintos navegadores
```Bash
npm run cy:run:chrome
```
o
```Bash
npm run cy:run:firefox
```

### Generación de Reportes JUnit
Las pruebas en modo run generarán automáticamente archivos XML en la carpeta:
cypress/results/
### Reportes y Capturas
JUnit XML: Se generan automáticamente al fallar o pasar un test en modo run.

Screenshots: Si un test falla (tanto en modo Open como Run), la captura se guardará en cypress/screenshots/.

## Tecnologías Principales
- Cypress - Framework de Testing.
- JUnit Reporter - Generación de reportes XML.
- JavaScript - Lenguaje base.