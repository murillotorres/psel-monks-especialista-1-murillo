# 🛠️ Guia de Instalação

Este projeto usa **Docker**, **WordPress**, **React** e **MySQL**. Para rodá-lo corretamente, siga os passos abaixo.

---

## 📌 1. Requisitos

Antes de rodar o projeto, instale os seguintes programas no seu computador:

### ✅ 1.1 Docker e Docker Compose
- **Windows / Mac:** Baixar e instalar [Docker Desktop](https://www.docker.com/products/docker-desktop)  
- **Linux (Ubuntu/Debian):** Instalar com os comandos:
  ```sh
  sudo apt update
  sudo apt install -y docker.io docker-compose
  sudo systemctl enable --now docker
  ```

- **Verificar instalação:**  
  ```sh
  docker --version
  docker-compose --version
  ```

---

### ✅ 1.2 Git
- **Windows:** Baixar e instalar [Git](https://git-scm.com/downloads)  
- **Linux/macOS:** Instalar com:  
  ```sh
  sudo apt install git -y  # Ubuntu/Debian
  brew install git         # macOS
  ```

- **Verificar instalação:**  
  ```sh
  git --version
  ```

---

### ✅ 1.3 Node.js e npm (opcional)
Se quiser rodar o **frontend React** fora do Docker, instale o Node.js:

- **Baixar o Node.js:** [https://nodejs.org/en](https://nodejs.org/en)  
- **Linux/macOS:**  
  ```sh
  sudo apt install nodejs npm -y  # Ubuntu/Debian
  ```

- **Verificar instalação:**  
  ```sh
  node -v
  npm -v
  ```

---

## 🚀 2. Como rodar o projeto?

### 🔹 Clonar o repositório
```sh
git clone SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

### 🔹 Rodar o projeto
```sh
docker-compose up -d
```

Agora o projeto estará rodando! 🎉

---

## 🌐 3. Como acessar?

- **Backend (WordPress):** [`http://localhost:8000`](http://localhost:8000)  
- **Banco de Dados (phpMyAdmin):** [`http://localhost:8080`](http://localhost:8080)  
- **Frontend (React):** [`http://localhost:3000`](http://localhost:3000)  