#!/usr/bin/env bash
# Exit script as soon as a command fails.
set -o errexit

# Executes cleanup function at script exit.
trap cleanup EXIT

cleanup() {
    echo Trying to stop testrpc docker container

}

startup() {

}

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

echo Running tests...
export WALLET_PATH=$WALLET_PATH

node ./node_modules/selenium-cucumber-js/index.js${tags}${CI}
