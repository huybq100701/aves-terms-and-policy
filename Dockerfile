ARG BASE_PATH=/avesos/tos

# Build stage
FROM node:22-alpine AS build
ARG BASE_PATH
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --base=${BASE_PATH}/

# Runtime stage
FROM nginx:stable-alpine
ARG BASE_PATH
ENV BASE_PATH=${BASE_PATH}

# nginx image 
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html${BASE_PATH}

EXPOSE 80
