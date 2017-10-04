#!/bin/sh

rm -rf node_modules/
ncu -a
npm install
npm test
npm run prepublish
