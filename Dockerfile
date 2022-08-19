FROM node:16

WORKDIR /home/tran/api

copy * ./

RUN npm install

EXPOSE 80

CMD [ "npm", "start"]