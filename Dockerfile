FROM node:8-slim

WORKDIR /opt/app/

COPY package.json ./

RUN yarn install

# ADDING . before this will invalidate the cache for NPM install.. This is probably not what you want.
ADD . .

CMD yarn start
