FROM node:16-alpine AS build
WORKDIR /app
COPY . .
RUN apk add --no-cache git
RUN npm install -g npm@9.8.1
RUN npm install
RUN npm run build

FROM node:16-alpine AS production
ARG NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache git
RUN npm install -g npm@9.8.1
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist
RUN cd ./dist && ls -la
CMD [ "npm", "run", "start" ]
EXPOSE 3306
