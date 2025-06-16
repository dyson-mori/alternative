# Teste Técnico Pleno II • Next.js 15
Documentação criada com o objetivo de guiar desenvolvedores iniciantes (nível Júnior) na execução e compreensão do projeto. Aqui estão os passos para instalar, rodar, testar e entender cada parte da aplicação.

## 📦 Instalação
No `terminal` ou `CMD` do projeto, execute:
```bash
pnpm install
```
Esse comando instalará todas as dependências listadas no projeto.

## 🔰 Rodando o Projeto
Crie o arquivo `.env` com:
```bash
touch .env
```
Em seguida, adicione a variável de ambiente:
```bash
NEXT_RAILS_URL="http://localhost:3333"
```
Para iniciar a aplicação em modo de desenvolvimento:
```bash
pnpm run dev
```
Abra seu navegador e acesse `http://localhost:3000` ou [clicando aqui](http://localhost:3000).

## 🐳 Docker
Certifique-se de que o Docker está em execução, e então rode:
```bash
docker compose up --build
```
Este comando irá subir os containers do Frontend, facilitando a integração local.

## 🧪 Testes
Para rodar os testes automatizados:
```bash
pnpm run test
```

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
  - [✔️] Docker compose para rodar Frontend + Backend
  - [✔️] Dockerfile para build das imagens (pense em upload para o AWS ECR)
