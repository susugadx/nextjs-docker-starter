FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]