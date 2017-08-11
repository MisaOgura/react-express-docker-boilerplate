FROM node:8-slim

WORKDIR /opt/app/

COPY package.json ./

RUN yarn install

ADD . .

CMD yarn start
