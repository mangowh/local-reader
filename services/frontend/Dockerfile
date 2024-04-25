FROM node:20-alpine as base

WORKDIR  /home/node/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .



FROM node:20-alpine as builder

WORKDIR  /home/node/app

COPY --from=base /home/node/app .

RUN npm run build


FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=builder /home/node/app/dist/app/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80