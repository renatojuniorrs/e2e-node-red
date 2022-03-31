# syntax=docker/dockerfile:1
FROM ubuntu:18.04
COPY . .
RUN npm install
ENTRYPOINT [ "npm start" ]