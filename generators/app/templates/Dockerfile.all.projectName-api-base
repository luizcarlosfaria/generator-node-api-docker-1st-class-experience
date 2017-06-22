FROM node:alpine

ADD ./package-lock.json 	/app/package-lock.json
ADD ./package.json 			/app/package.json
ADD ./tsconfig.json 		/app/tsconfig.json
ADD ./tslint.json 			/app/tslint.json
ADD ./typings.json 			/app/typings.json

WORKDIR /app/

EXPOSE 3000

RUN npm run restore-all