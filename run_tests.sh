#!/usr/bin/env bash
export CI_SONM_TOKEN_ADDRESS=0xb29d1e8259571de17429b771ca455210f25b9fce

while test $# -gt 0
do
    case "$1" in
        -p|--path)
            shift
            export WALLET_PATH=$1
            shift
            ;;
        @*)
            tags="$tags $1"
            shift
            ;;
        *)
            break
            ;;
    esac
done

if [ -z "$tags" ]; then
   tags=''
else
   tags=" --tags $tags"
fi

echo Starting testrpc docker container
docker run -d -p 8545:8545 --name=testrpc trufflesuite/ganache-cli:latest  \
  -l 10000000 \
  --account="0xcfd4b9b614e30f929296034d5dd7b701783aae0d273fcb9f23130c3d6ead9620,76500000000000000000000" \
  --account="0x1da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x2da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x3da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x4da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x5da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x6da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x7da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0xa6a285059b30fdcee76d8f22113635374d56f9a9c0d762705160740d6cb0dc07,76500000000000000000000" \
  --account="0x69deaef1da6fd4d01489d7b46e8e3aab587d9fcd49de2080d367c3ef120689ef,76500000000000000000000"

echo Migrating contracts to testrpc
(cd blockchain && truffle migrate)

echo Running tests...
npm install
node ./node_modules/selenium-cucumber-js/index.js${tags}

echo Trying to stop testrpc docker container
docker stop testrpc

echo Removing testrpc docker container
docker rm testrpc