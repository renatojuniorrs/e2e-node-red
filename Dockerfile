# syntax=docker/dockerfile:1
FROM node:14-buster-slim
COPY . .
RUN npm install
ENTRYPOINT [ "npm start" ]