FROM node:boron
WORKDIR /usr/src/app
COPY package.json .
RUN npm install

COPY index.js .
EXPOSE 8001
CMD ["node", "index.js"]
