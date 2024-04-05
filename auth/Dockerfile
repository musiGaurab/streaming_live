FROM node:21-alpine3.18

WORKDIR /app/auth

COPY package.json .

RUN npm install && npm install -g nodemon

COPY . .


CMD [ "npm", "start" ]