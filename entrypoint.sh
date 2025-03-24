#!/bin/bash
set -e

# Verifica se o WordPress já está instalado
if [ ! -f /var/www/html/wp-config.php ]; then
  echo "Copiando arquivos do WordPress para a pasta backend..."
  cp -r /usr/src/wordpress/* /var/www/html/
fi

# Inicia o WordPress normalmente
exec docker-entrypoint.sh apache2-foreground
