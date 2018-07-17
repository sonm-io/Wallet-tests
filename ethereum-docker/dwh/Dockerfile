FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y curl apt-utils
RUN curl -s https://packagecloud.io/install/repositories/SONM/core-dev/script.deb.sh | bash
RUN apt-get install -y sonm-dwh

RUN mkdir /sonm
RUN mkdir /sonm/keys
ADD dwh-key.json /sonm/keys/dwh-key.json
ADD dwh.yml /sonm/dwh.yml

CMD ["sonmdwh", "--config", "/sonm/dwh.yml"]