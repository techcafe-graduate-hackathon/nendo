FROM node:10.16.3-alpine

RUN mkdir /app_name 
ENV APP_ROOT /app_name 
WORKDIR $APP_ROOT

RUN yarn install
RUN yarn upgrade

ADD . $APP_ROOT

CMD ["yarn", "start"]