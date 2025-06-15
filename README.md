# Teste Técnico Pleno II • Next.js 15
Criei essa documentação como se eu tivesse ensinando para um Junior que está aprendendo sobre a Programação.

## 📦 Instalação
Abra o `terminal` dentro do projeto e execute `pnpm install`.

## 🔰 Rodando o Projeto
Em seguida você criará o arquivo `.env`, basta executar esse comando no `CMD`

`echo "NEXT_RAILS_URL=http://localhost:3333" > .env`

Logo após isso basta executar `pnpm run dev` e no chrome abra em `http://localhost:3000` ou [clique aqui](http://localhost:3000).

## 🐳 Docker
Com o `terminal` e o `🐳 Docker` aberto, execute `docker compose up --build`.

## 🧪 Testes
Com o `terminal` aberto, execute `pnpm run test`, aqui realizei os testes:
### Telas
  - Login
    - [✔️] Realiza login com sucesso e redireciona para /profile
    - [✔️] Exibe uma mensagem de erro quando as credenciais são inválidas
  - Registro
    - [✔️] Realiza cadastro com sucesso e redireciona para /login
    - [✔️] Exibe uma mensagem de erro quando as credenciais são inválidas
  - Perfil
    - [✔️] Renderiza corretamente com os dados do usuário
    - [✔️] Testar acesso protegido à página /profile

### Componentes
  - Botão
    - [✔️] Renderiza com tema Primary
    - [✔️] Renderiza com tema Error
    - [✔️] Executa função ao clicar
    - [✔️] Renderiza conteúdo de loading quando loading=true
    - [✔️] Fica desabilitado quando loading=true mesmo que não tenha disabled=true
    - [✔️] Fica desabilitado quando disabled=true
  - Input
    - [✔️] Renderizar o label e o input
    - [✔️] Deve permitir digitação e chamar onChange
    - [✔️] Deve exibir o valor corretamente

## 📚 Tarefas
### Login
  - [✔️] Criar o formulário de login que envie apenas o `email` e `password`.
  - [✔️] O frontend salva o JWT (em cookie HttpOnly ou localStorage) e redireciona para a página do usuário.

### SignUp
  - [✔️] Criar o formulário de login que envie o `name`, `email`, `password`.
  - [✔️] Ser possivel criar a conta.
  <!-- - [✖️] O backend deve registrar o usuário e retornar um token JWT. -->

### Profile
  - [✔️] Protegida.
  - [✔️] Exibir os dados do usuário autenticado.
  - [✔️] Proteger a rota /profile de acesso não autorizado

## 📤 Ícones para Commits
  - ✏️ Edição de Códigos Existentes
  - 📦 Adicionando Pacotes
  - 🧪 Testes
  - ✨ Novas Features
  - 🚧 Possíveis Mudanças Pendentes.

## 🚀 Critérios de avaliação
  - [✔️] Versionamento no Git
  - [✔️] Implementação correta das features
  - [✔️] Uso adequado de TDD
  - [✔️] Código limpo e organizado
  - [✔️] Proteção e fluxo de autenticação JWT
  - [✔️] Experiência do usuário (UX)

## ⭐ Diferenciais
  - [✔️] Implementação de CI/CD (GitHub Actions / Gitlab CI)
  - [✖️] Docker compose para rodar Frontend + Backend
  - [✖️] Dockerfile para build das imagens (pense em upload para o AWS ECR)


  version: "3.9"

services:
  backend:
    container_name: porcupine-backend
    build: .
    ports:
      - "3333:3333"
    environment:
      - RAILS_ENV=production
    volumes:
      - .:/app
    networks:
      - app-network

networks:
  app-network:
