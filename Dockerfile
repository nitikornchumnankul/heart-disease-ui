FROM nginx:stable-alpine AS production-stage
COPY ./dist /home/superuser/heart-disease
COPY .env.production /home/superuser/heart-disease/.env

COPY /deployment/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80