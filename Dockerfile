FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json .

RUN npm i
RUN npm i nodemon -g
RUN npm i typescript -g
RUN npm i sequelize-cli -g

COPY . .

EXPOSE 6010
EXPOSE 5432

CMD ["npm run start:watch"]
