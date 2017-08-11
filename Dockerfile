FROM node:6.9-slim

WORKDIR /opt/app/

COPY package.json ./

RUN npm install

# ADDING . before this will invalidate the cache for NPM install.. This is probably not what you want.
ADD . .

CMD npm start
