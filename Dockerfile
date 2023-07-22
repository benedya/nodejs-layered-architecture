FROM node:18-slim

SHELL ["/bin/bash", "-c"]

RUN apt-get update && apt-get upgrade -y

RUN npm i -g npm-check-updates

WORKDIR /home/node/src

USER node

CMD npm install && npm run dev
