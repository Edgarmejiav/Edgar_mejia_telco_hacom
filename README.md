# Evaluación Frontend TELCO Hacom

## Descripción

Este proyecto consiste en una aplicación frontend desarrollada con Angular 11, que utiliza diversas tecnologías como Bootstrap, Angular Material y Apache Echarts para crear una aplicación interactiva que maneja libros y autores. La aplicación incluye funcionalidades de un CRUD de libros, gráficos interactivos, y más.

## Tecnologías Usadas

### Frontend:

- **Angular 11**: Framework principal para la aplicación.
- **Bootstrap**: Para diseño responsivo y componentes básicos.
- **Angular Material**: Para componentes UI adicionales como botones, menús, etc.
- **Apache Echarts**: Para la visualización de gráficos dinámicos.

### Backend (Opcional):

- **json-server**: Se utilizó para pruebas y simulación de datos, reemplazando un backend con Spring Boot WebFlux.

> Nota: La implementación de un backend con Spring Boot WebFlux es opcional y no se implementó en esta versión.

## Requerimientos

1. **Backend con Spring Boot WebFlux (Opcional)**:

- Desarrollar un Web Service usando **Spring Boot WebFlux** en Java para alimentar la información de la web.

2. **Página Principal y CRUD de Libros**:

- Se manejan las siguientes entidades:
  - **Libro**: ID, título, descripción, año, id autor, publicado, Fecha Registro.
  - **Autor**: ID, Nombre, Género.
- La aplicación permite realizar operaciones CRUD para gestionar los libros y autores.

3. **Dashboard**:

- Resumen de los libros relacionados con el CRUD.
- Incluir los siguientes gráficos:
  - Gráfico de barras de libros por año.
  - Gráfico de Pie para mostrar libros publicados y no publicados.
  - Gráfico de Pie que muestra la distribución de géneros de los autores.
- Simulación de registros de 4,000 a 12,000 registros cada 5 segundos.
- La simulación elimina información de más de 2 horas.

4. **Características adicionales**:

- Mantener la información de sesión y la ruta al presionar F5.
- Utilizar directivas para gráficos con URL incorrecta y fechas con formato incorrecto.
- Manejar errores HTTP y mostrar mensajes de error globalmente.

5. **Repositorio en GitHub**:

- Subir la aplicación a un repositorio público en GitHub.
- Compartir el enlace al correo: **alan.honorio@selectum.pe**.

## Instalación

### Requisitos Previos

1. **Node.js (14.x o superior)**: Se recomienda usar Node.js 14.x para asegurar la máxima compatibilidad con Angular 11.
2. **Angular CLI**: Necesitarás Angular CLI para desarrollar y servir el proyecto.

## Pasos para ejecutar el proyecto

Recomendado usar Docker para ejecutar el proyecto.

```bash
docker-compose up --build
   ```

http://localhost:4200/

### Pasos para ejecutar el localmente

1. **Instalar las dependencias**:

   Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

2. **Iniciar la aplicación Angular**:

   Ejecuta el siguiente comando para iniciar el servidor de desarrollo de Angular:

   ```bash
   npm run start:ng
   ```

   La aplicación Angular estará disponible en `http://localhost:4200`.

3. **Iniciar el Backend con json-server**:

   Ejecuta el siguiente comando para iniciar el backend simulado con json-server:

   ```bash
   npm run start:api
   ```

   El backend estará disponible en `http://localhost:3000`.

4. **Ejecutar ambos servidores simultáneamente** (opcional):

   Si deseas ejecutar ambos servidores al mismo tiempo, utiliza el siguiente comando:

   ```bash
   npm start
   ```

   Esto ejecutará tanto el frontend como el backend usando **concurrently**.

```

