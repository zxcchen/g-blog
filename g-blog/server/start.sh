#!/bin/bash

nohup node ./bin/www 1>/tmp/gblog_server.log 2>&1 &
