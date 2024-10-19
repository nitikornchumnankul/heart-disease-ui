FROM nginx:stable-alpine AS production-stage
COPY ./dist /home/superuser/heart-disease

COPY /deployment/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80