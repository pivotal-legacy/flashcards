#!/usr/bin/env bash

set -e # exit on first failure

ROOT_DIR=$PWD

function fail {
    ${ROOT_DIR}/bin/failureMessage.sh
    exit 1
}

function printStep {
    echo
    echo ===============================================================================
    echo $1
    echo ===============================================================================
}

printStep "RUNNING SERVER TESTS"
./gradlew :applications/back-end:build || fail

pushd applications/front-end
printStep "RUNNING WEB CLIENT TESTS"
./bin/runTests.sh || fail
popd

pushd e2e-test
printStep "RUNNING END-TO-END TESTS"
./bin/runTests.sh || fail
popd

./bin/successMessage.sh