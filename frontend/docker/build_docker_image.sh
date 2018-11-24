#!/bin/sh -e
set -x

cd `dirname $0`/..
yarn
yarn build
sudo docker build . -t cutartsis-frontend -f ./docker/Dockerfile
