# Paso 1: Imagen base de Node.js
FROM node:14 AS build

  # Paso 2: Configuración del directorio de trabajo
WORKDIR /app

  # Paso 3: Copiar el package.json y package-lock.json
COPY package*.json ./

  # Paso 4: Instalar las dependencias
RUN npm install

  # Paso 5: Copiar el resto del proyecto
COPY . .

  # Paso 6: Construir la aplicación Angular
RUN npm run build

  # Paso 7: Imagen base para ejecutar la aplicación
FROM node:14

  # Paso 8: Configurar el directorio de trabajo para la API
WORKDIR /app

  # Copiar los archivos de build y otros recursos necesarios para ejecutar la API y Angular
COPY --from=build /app /app


  # Exponer puertos (Angular en el 4200 y json-server en el 3000)
EXPOSE 4200 3000

  # Paso 9: Comando para ejecutar la aplicación Angular y json-server
CMD ["bash", "-c", "npm run start:ng & npm run start:api"]
