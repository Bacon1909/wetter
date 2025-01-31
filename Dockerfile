#Stage 1: the build

FROM node:latest AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . . 

RUN npm run build

#an dieser Stelle haben wir in diesem Image 'builder' den dist-Ordner generiert

#stage 2: the prod image

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist/ /usr/share/nginx/html


EXPOSE 80



CMD ["nginx", "-g", "daemon off;"]