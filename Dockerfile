FROM oven/bun:1 AS builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

ENV NODE_ENV production

RUN bun run build && \
		test -d dist && test -f dist/index.html && \
    bun pm cache clean && rm -rf src test && \
		find dist -type f \( \
		-name "*.html" -o \
		-name "*.css" -o \
		-name "*.js" -o \
		-name "*.json" -o \
		-name "*.xml" -o \
		-name "*.txt" -o \
		-name "*.svg" \
		\) -exec sh -c 'gzip -9 "{}"' \;

# ==============================================================================
# Production Stage - Using lipanski/docker-static-website for extreme minimal footprint (92.5 KB base)
# ==============================================================================
FROM lipanski/docker-static-website:latest AS runner

# Copy built assets from builder stage
# lipanski/docker-static-website serves from /home/static
COPY --from=builder /app/dist /home/static

# Expose port (BusyBox httpd uses port 3000 by default)
EXPOSE 3000
