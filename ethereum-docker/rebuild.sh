#!/usr/bin/env bash
docker stop $(docker ps -q)
docker rm $(docker ps -q -a)
docker-compose -f docker-compose-side.yml stop
docker-compose -f docker-compose-side.yml rm -f
docker-compose -f docker-compose-side.yml build
docker-compose -f docker-compose-side.yml up -d

docker-compose -f docker-compose-live.yml stop
docker-compose -f docker-compose-live.yml rm -f
docker-compose -f docker-compose-live.yml build
docker-compose -f docker-compose-live.yml up -d