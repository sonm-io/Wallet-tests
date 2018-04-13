#!/usr/bin/env bash
export CI_SONM_TOKEN_ADDRESS=0xb29d1e8259571de17429b771ca455210f25b9fce
WALLET_PATH=''
CI=''
testrpc_name=testrpc

while test $# -gt 0
do
    case "$1" in
        -p|--path)
            shift
            WALLET_PATH=$1
            shift
            ;;
        --ci)
            CI=' --disableLaunchReport'
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

if [[ $(docker ps -q --filter "name=${testrpc_name}") ]]; then
    echo Stop and remove existing testrpc container
    docker stop ${testrpc_name} && docker rm ${testrpc_name}
fi
if [[ $(docker ps -q -a --filter "name=${testrpc_name}") ]]; then
    echo Remove existing testrpc container
    docker rm ${testrpc_name}
fi

docker run -d -p 8545:8545 --name=${testrpc_name} trufflesuite/ganache-cli:latest  \
  -l 10000000 \
  --account="0xcfd4b9b614e30f929296034d5dd7b701783aae0d273fcb9f23130c3d6ead9620,76500000000000000000000" \
  --account="0x1da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x2da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x3da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x4da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x5da1383caf0b6e14487550d41334a591430c8220ace1133600099b81b71503c7,76500000000000000000000" \
  --account="0x285a745c8179f9771946b1d35449534eb25594aec8b2e694550d7bac644bec1f,76500000000000000000000" \
  --account="0x91789c8a390315310d8b616df1ec816f174526635ed440ca5c255b8a3ee1701d,76500000000000000000000" \
  --account="0xa6a285059b30fdcee76d8f22113635374d56f9a9c0d762705160740d6cb0dc07,76500000000000000000000" \
  --account="0x69deaef1da6fd4d01489d7b46e8e3aab587d9fcd49de2080d367c3ef120689ef,76500000000000000000000"

echo Migrating contracts to testrpc
(cd blockchain && truffle migrate)

echo Running tests...
export WALLET_PATH=$WALLET_PATH
npm install
node ./node_modules/selenium-cucumber-js/index.js${tags}${CI}

echo Trying to stop testrpc docker container
docker stop ${testrpc_name}

echo Removing testrpc docker container
docker rm ${testrpc_name}