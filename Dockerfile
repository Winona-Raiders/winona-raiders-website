FROM node:14.20-alpine

ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app

WORKDIR /opt/app

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]