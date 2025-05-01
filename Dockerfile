# Paso 1: Usar la imagen base de Node.js para la construcción
FROM node:14 AS build

# Paso 2: Establecer el directorio de trabajo
WORKDIR /app

# Paso 3: Copiar los archivos de configuración de npm
COPY package*.json ./

# Paso 4: Instalar las dependencias
RUN npm install

# Paso 5: Copiar el resto del proyecto
COPY . .

# Paso 6: Construir la aplicación Angular
RUN npm run build

# Paso 7: Usar la imagen base para producción (Node.js)
FROM node:14

# Paso 8: Establecer el directorio de trabajo para la API
WORKDIR /app

# Paso 9: Copiar los archivos construidos y otros necesarios para ejecutar la API y Angular
COPY --from=build /app /app

# Paso 10: Instalar PM2 globalmente
RUN npm install pm2 -g

# Paso 11: Copiar el script start.sh al contenedor
COPY start.sh /app/start.sh

# Paso 12: Dar permisos de ejecución al script
RUN chmod +x /app/start.sh

# Exponer los puertos para Angular (4200) y la API (3000)
EXPOSE 4200 3000

# Paso 13: Usar el script start.sh para iniciar ambos procesos
CMD ["/app/start.sh"]
