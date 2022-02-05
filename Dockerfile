FROM node:17-slim

SHELL ["/bin/bash", "-c"]

RUN apt-get update && apt-get upgrade -y

WORKDIR /home/node/src

CMD npm install && npm run dev