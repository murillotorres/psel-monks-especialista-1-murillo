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

Certifique-se que as portas 8000, 8080 e 3000 não esteja sendo utilizada por nenhuma outra aplicação.

2. Execute o código abaixo para clonar o repositório, acessar a pasta do repositório e subir nosso container docker.
```bash
git clone https://github.com/murillotorres/psel-monks-especialista-1-murillo.git
cd psel-monks-especialista-1-murillo
docker-compose up -d
```

Aguarde o Docker ser instalado, após isso:
```bash
cd .\frontend\
npm install
```

Aguarde as depêndencias da aplicação serem instaladas, e então inicie o front-end: 
```bash
npm start
```

✅ O Wordpress agora está acessível em http://localhost:8000 

✅ O frontend, está rodando em: http://localhost:3000

🔐 Credenciais do Wordpress: 
Usuário: murillo.monks

Senha: murillo@@monks

## **Como alterar as informações da Landing Page**
Acesse o painel do Wordpress (http://localhost:8000/wp-admin) e clique **Páginas** no menu lateral.

Passe o mouse sobre o item **Página Principal** e então clique em **Editar** 

Todos os itens disponíveis para edição estão organizados em abas.

**Aparência do Site, Menus e Redes Sociais**
Para fazer alterações nos menus do site, clique em **Aparência** >> **Menus** no menu lateral.

Será exibido a tela padrão de alterações de menu do Wordpress, e você pode selecionar qual menu deseja alterar.


Para controlar os links das redes sociais e demais elementos gráficos da página, clique em: **Aparência** >> **Opções do Tema** no menu lateral.


## **Como ver os cadastros realizados pelo formulário**
No painel do Wordpress, clique em **Contatos** no menu lateral.  

Será listado todos os contatos recebidos pelo formulário de contato da landing page.

O código está propositalmente exibindo apenas 3 resultados por página para teste de paginação. 

## **Duvidas, sugestões e melhorias**
Você pode entrar em contato pelo meu perfil no [Linkedin](https://www.linkedin.com/in/murillottorres/).
