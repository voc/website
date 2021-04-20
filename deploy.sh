#!/bin/bash

set -e
set -o pipefail

# Find directory in which this script is stored by traversing all symbolic links
SOURCE="${0}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
SCRIPTDIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

cd "${SCRIPTDIR}/src"
rm -rf public
../bin/hugo
rsync --delete --recursive --links public/ voc@web.c3voc.de:/var/www/001-c3voc.de/website/
