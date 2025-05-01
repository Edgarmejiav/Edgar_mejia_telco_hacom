#!/bin/bash
# Inicia la aplicación Angular con PM2
pm2 start npm --name "angular-app" -- run start:ng
# Inicia el servidor API con PM2
pm2 start npm --name "api-server" -- run start:api
# Mantén PM2 en ejecución
pm2 startup
pm2 save
# Mantén los logs de PM2 visibles
pm2 logs
