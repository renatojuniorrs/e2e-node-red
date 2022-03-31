# syntax=docker/dockerfile:1
FROM node:14-buster-slim
WORKDIR /usr/node-red
COPY . .
RUN npm install
ENTRYPOINT [ "npm start" ]