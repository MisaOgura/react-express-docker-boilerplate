FROM node:6.9-slim

RUN yarn --version || curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH "/root/.yarn/bin:$PATH"
RUN yarn --version

WORKDIR /opt/app/

COPY package.json ./

RUN yarn install

# ADDING . before this will invalidate the cache for NPM install.. This is probably not what you want.
ADD . .

CMD yarn start
