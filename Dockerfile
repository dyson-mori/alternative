FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl \
 && corepack enable \
 && corepack prepare pnpm@latest --activate

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
