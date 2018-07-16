FROM node:9-alpine

RUN mkdir /certs
RUN mkdir /proxy

COPY proxy.test.sonm.crt /certs/proxy.test.sonm.crt
COPY proxy.test.sonm.key /certs/proxy.test.sonm.key

ADD package.json /proxy/package.json
ADD index.js /proxy/index.js

WORKDIR /proxy
RUN npm install

CMD ["npm", "start"]