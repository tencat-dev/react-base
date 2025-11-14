FROM oven/bun:1 AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

ENV NODE_ENV production

RUN bun run build \
    && bun pm cache clean && rm -rf src test

FROM nginx:alpine-slim AS runner

RUN rm -rf /var/log/nginx/*

COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
