#!/bin/sh -e
set -x

cd `dirname $0`/..

rm -r public/images
ln -s /data/frontend-images public/images

yarn
yarn build
sudo docker build . -t cutartsis-frontend -f ./docker/Dockerfile

# перезапуск docker контейнеров на сервере
sudo docker-compose down
sudo docker container prune --force
sudo -E docker-compose up -d
