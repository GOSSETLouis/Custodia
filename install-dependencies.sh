#!/bin/bash

RED='\033[31m'
GREEN='\033[32m'
YELLOW='\033[33m'
RESET='\033[39m'
ARROW="\033[1m${RED}>${GREEN}>${YELLOW}>${RESET}"

DISTRIBUTION=$(lsb_release -si)

echo -e "${ARROW} Install dependencies..."

if [ "$DISTRIBUTION" = "Ubuntu" ]; then
    sudo apt-get install --no-install-recommends libnss3 libnss3-dev libnss3-tools postgresql postgresql-contrib mkcert nodejs
elif [ "$DISTRIBUTION" = "EndeavourOS" ] || [ "$DISTRIBUTION" = "ManjaroLinux" ]; then
    sudo pacman -S --needed nss mkcert nodejs postgresql postgresql-libs
else
    echo -e "${RED}Distribution not supported${RESET}"
    exit 1
fi
