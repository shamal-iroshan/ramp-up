FROM node:20 AS development

WORKDIR /front-end/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@19.0.7

COPY . .

RUN npm run build

EXPOSE 4200
