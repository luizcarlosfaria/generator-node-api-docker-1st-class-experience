FROM <%- projectName %>-api-base

ADD ./src /app/src

RUN npm run build

ENTRYPOINT nodemon ./dist/server.js 


