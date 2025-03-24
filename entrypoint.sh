#!/bin/bash
echo "Iniciando o WordPress..."
exec docker-entrypoint.sh apache2-foreground
