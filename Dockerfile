FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
# O build usa base /selfmedclub/proposta/ (vite.config.ts), então os arquivos ficam nessa subpasta
COPY --from=build /app/dist /usr/share/nginx/html/selfmedclub/proposta
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
