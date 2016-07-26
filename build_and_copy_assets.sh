#!/bin/bash

pushd applications/front-end/
npm run build > /dev/null
popd

cp applications/front-end/build/* applications/back-end/build/resources/main/public/

echo "updated."
