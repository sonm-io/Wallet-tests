#!/usr/bin/env bash

cd /sonm
sed -i 's/DIRECTION/'"${DIRECTION}"'/g' /sonm/gatekeeper.yaml
./gatekeeper_linux_x86_64 --config=gatekeeper.yaml