#!/bin/bash
set -e
set -x

REMOTE=207.154.229.41
cd `dirname $0`

sshpass -e ssh -o stricthostkeychecking=no $REMOTE <<ENDSSH
set -e
set -x

# To generate $GITHUB_TOKEN use our github account (???) and page https://github.com/settings/tokens
# You can find it credintals here ???
rm -rf ~/deploy
git clone --depth 1 "https://$GITHUB_TOKEN@github.com/clumpytuna/cutartsis.git" ~/deploy
cd ~/deploy

# создаём docker образ cutartsis-frontend
./frontend/docker/build_docker_image.sh

# перезапуск docker контейнеров на сервере
sudo docker stop cutartsis-frontend
sudo docker run -d --rm cutartsis-frontend --name cutartsis-frontend
ENDSSH
echo "Deploy complete!"
