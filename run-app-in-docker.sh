#!/usr/bin/env bash

docker-compose kill
docker-compose rm -f
docker-compose build
docker-compose run --rm --service-ports app