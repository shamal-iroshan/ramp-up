FROM node:20 AS development

WORKDIR /api-service/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
