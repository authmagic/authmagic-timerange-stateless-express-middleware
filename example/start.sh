#!/bin/bash

cd ./auth
npm install
cd ..

cd ./backend
npm install
cd ..

cd ./frontend
npm install
cd ..

./stop.sh

npm start --prefix ./auth &
npm start --prefix ./backend &
npm start --prefix ./frontend

