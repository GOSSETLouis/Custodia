#!/bin/bash
docker build --pull -f docker/node.dockerfile --build-arg PROJECT=custodia-api -t custodia-api .
docker save custodia-api:latest > custodia-prod.tar