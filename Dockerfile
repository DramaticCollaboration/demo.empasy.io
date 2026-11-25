FROM node:22.14-alpine AS builder

WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

COPY . .
RUN if [ ! -f dist/index.html ] || [ -n "$(find src public index.html -newer dist/index.html 2>/dev/null)" ]; then \
      rm -rf dist && \
      pnpm install --frozen-lockfile && \
      pnpm run build; \
    fi

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
RUN sed -i "s|/run/nginx.pid|/tmp/nginx.pid|g; s|/var/run/nginx.pid|/tmp/nginx.pid|g" /etc/nginx/nginx.conf && \
    chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /var/run
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:80/ >/dev/null 2>&1 || exit 1
CMD ["nginx", "-g", "daemon off;"]
