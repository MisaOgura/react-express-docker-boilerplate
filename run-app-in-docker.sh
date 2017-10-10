#!/usr/bin/env bash

# Forces running containers to stop.
docker-compose kill

# Forcefully removes any stopped service containers.
docker-compose rm -f

docker-compose build

# Runs the app with port(s) enabled and mapped to the host. Removes the container after run.
docker-compose run --rm --service-ports app
