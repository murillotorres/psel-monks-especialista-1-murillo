FROM node:22-alpine AS build
WORKDIR /src
COPY . .
RUN npm ci --no-audit && npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/build /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]