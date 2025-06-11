# Teste Técnico Pleno II • Next.js 15

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

  - [in_progress] Implementar testes com Jest e Testing Library
  - [in_progress] Proteger a rota /profile de acesso não autorizado

### Testes
  - [✖️] Next.js (Jest + React Testing Library)
  - [✖️] Testar comportamento dos formulários (signup, login)
  - [✖️] Testar redirecionamento após login
  - [✖️] Testar acesso protegido à página /profile

## Icons
  - ✏️ edit files
  - 📦 add new package
  - 🧪 testes
  - ✨ new feature
  - 🚧 possiveis mudanças serão feitas.

## 🚀 Critérios de avaliação
  - Versionamento no Git
  - Implementação correta das features
  - Uso adequado de TDD
  - Código limpo e organizado
  - Proteção e fluxo de autenticação JWT
  - Experiência do usuário (UX)

## ⭐ Diferenciais
  - Implementação de CI/CD (GitHub Actions / Gitlab CI)
  - Docker compose para rodar Frontend + Backend
  - Dockerfile para build das imagens (pense em upload para o AWS ECR)