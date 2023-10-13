FROM node:18.15-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV VITE_GOOGLE_BOOK_API_KEY='Your API key'

EXPOSE 3000

CMD [ "npm", "run", "dev" ]