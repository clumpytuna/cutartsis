#!/bin/bash
set -e
set -x

REMOTE=cutartsis@207.154.229.41

sshpass -p $PASS ssh  -o StrictHostKeyChecking=no ${REMOTE} << ENDSSH

set -e
set -x

# To generate $GITHUB_TOKEN use our github account (???) and page https://github.com/settings/tokens
# You can find it credintals here ???


sudo rm -rf ~/deploy
git clone --depth 1 "https://$GITHUB_TOKEN@github.com/clumpytuna/cutartsis.git" ~/deploy

~/deploy/frontend/docker/build_and_restart_docker.sh

ENDSSH
echo "Deploy complete!"


