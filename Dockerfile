FROM node:8-slim

WORKDIR /opt/app/

COPY package.json yarn.lock ./

RUN yarn install

ADD . .

CMD yarn start
