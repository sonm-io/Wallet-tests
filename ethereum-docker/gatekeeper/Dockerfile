FROM ubuntu:latest

RUN apt-get update

RUN mkdir /sonm
RUN mkdir /sonm/keys
ADD gatekeeper-key.json /sonm/keys/gatekeeper-key.json
ADD gatekeeper_linux_x86_64 /sonm/gatekeeper_linux_x86_64
ADD gatekeeper.yaml /sonm/gatekeeper.yaml

ADD start.sh /sonm/start.sh
RUN chmod +x /sonm/start.sh

ENTRYPOINT /sonm/start.sh