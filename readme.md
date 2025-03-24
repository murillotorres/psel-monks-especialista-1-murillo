# **Projeto Monks**

## **Visão Geral**
Este projeto é uma landing page dinâmica composta por um **backend em WordPress**, que funciona como painel administrativo da página e fornece uma API, e um **frontend em React**, que consome os dados dessa API em uma interface responsiva e moderna.
Desenvolvido como parte de um teste técnico para a posição de desenvolvedor de software na empresa Monks.

Para começar, recomendo que crie uma pasta chamada Monks para o nosso projeto.

## **Requisitos Necessários**
Para rodar o projeto na sua máquina local é necessário ter algumas depêndencias instaladas para rodar o Wordpress, MySQL e React.
Nosso projeto precisa que sua máquina tenha:
- Git
- Docker e Docker Compose
- Node.js e npm

[Instruções para instalar todas essas depêndencias](https://github.com/murillotorres/psel-monks-especialista-1-murillo/blob/main/install.md)

## **Instalação do Projeto**
1. Crie uma pasta chamada 'Monks' no disco local da sua máquina e através do seu console.
⚠️ Certifique-se que as portas 8000 e 3000 não esteja sendo utilizada por nenhuma outra aplicação antes do passo 2.

2. Execute o código abaixo para clonar o repositório, acessar a pasta do repositório e subir nosso container docker.
```bash
git clone https://github.com/murillotorres/psel-monks-especialista-1-murillo.git
cd monks-especialista-1-murillo
docker-compose up -d
```

✅ O Wordpress agora está acessível em http://localhost:8000 
✅ O frontend, está rodando em: http://localhost:3000

🔐 Utilize as credenciais informadas na Gupy para acessar o painel administrativo.
