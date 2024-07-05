#!/bin/bash

REPO_DIR="/home/pi/github/the-map-group.github.io"

if [ -z $1 ];
  then
    echo "Usage: ./update-member-map.sh <member>"
    exit 1
fi

git pull origin master

cd $REPO_DIR/people/$1

git checkout -- countries.py
git checkout -- locations.py
git checkout -- user.py

./generate-map-data.py

git add countries.py
git add locations.py
git add user.py
git commit -m "Updated map for member '$1'"
git push origin master

rm countries.py
rm locations.py
rm user.py
