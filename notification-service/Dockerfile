FROM node:20 AS development

WORKDIR /notification-service/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001
