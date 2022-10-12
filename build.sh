#!/bin/bash

cd packages/local_modules/fm-loader

npm i
npm run clean
npm run build

cd ../../../

yarn

npm run clean
