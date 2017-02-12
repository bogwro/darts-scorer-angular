FROM cre8/node

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn install

COPY . /usr/src/app

CMD ["yarn", "run", "start"]

EXPOSE 3000
