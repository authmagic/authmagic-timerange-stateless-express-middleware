#!/bin/bash

lsof -ti:3000 -sTCP:LISTEN | xargs kill
lsof -ti:3001 -sTCP:LISTEN | xargs kill
lsof -ti:3002 -sTCP:LISTEN | xargs kill