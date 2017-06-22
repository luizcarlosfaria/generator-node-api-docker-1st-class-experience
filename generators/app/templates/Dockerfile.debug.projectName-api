FROM <%- projectName %>-api-base

#ADD ./dist /app/dist
#ADD ./src /app/src

EXPOSE 9229

VOLUME /app/src
VOLUME /app/dist

ENTRYPOINT nodemon --legacy-watch --delay 0.4 --inspect=0.0.0.0:9229 ./dist/server.js -e js


