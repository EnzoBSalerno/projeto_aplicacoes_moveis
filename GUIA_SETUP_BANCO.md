# Guia de Configuração do Backend e Banco de Dados (SQLite)

Este guia descreve passo a passo como configurar o ambiente, criar o banco de dados e rodar o backend.

## Pré-requisitos

*   Node.js instalado (versão 14 ou superior).
*   NPM (gerenciador de pacotes do Node).

## Passo a Passo

### 1. Navegar até a pasta do Backend

Abra o terminal na raiz do projeto e entre na pasta `backend`:

```bash
cd backend
```

### 2. Instalar Dependências

Instale as bibliotecas necessárias (`express`, `sqlite3`, `cors`):

```bash
npm install
```

Isso criará a pasta `node_modules`.

### 3. Configuração do Banco de Dados

O banco de dados SQLite é baseado em arquivo e não requer instalação de um servidor separado. O arquivo `database.js` que criamos já contém a lógica para:
1.  Criar o arquivo `database.db` se ele não existir.
2.  Criar as tabelas (`users`, `categories`, `shops`, `payment_methods`).
3.  Inserir dados iniciais (seed) para categorias e lojas.

Tudo o que você precisa fazer é iniciar o servidor.

### 4. Rodar o Servidor

Para iniciar o servidor e, consequentemente, inicializar o banco de dados:

```bash
npm start
```

Você verá a mensagem:
```
Database connected.
Backend server listening on port 3000
```
(E possivelmente mensagens de "Seeding..." na primeira execução).

### 5. Testar os Endpoints

Com o servidor rodando, você pode testar as rotas.

**Verificar status:**
Abra no navegador: `http://localhost:3000/`

**Listar Categorias:**
Abra no navegador: `http://localhost:3000/categories`

**Listar Lojas:**
Abra no navegador: `http://localhost:3000/shops`

**Login (Exemplo via cURL):**
```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"jules@email.com", "password":"123456"}'
```

## Estrutura do Banco de Dados

*   **users**: id, name, email, password, avatar
*   **categories**: id, name, icon
*   **shops**: id, name, category, rating, deliveryTime, image, deliveryFee
*   **payment_methods**: id, user_id, type, brand, last4, name, icon

## Comandos Úteis

*   **Parar o servidor:** Pressione `Ctrl + C` no terminal.
*   **Resetar o banco:** Basta apagar o arquivo `backend/database.db` e rodar `npm start` novamente. O script criará tudo do zero.
