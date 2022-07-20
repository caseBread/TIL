#!/bin/bash

usage=$(cat /proc/stat | head -1 | awk '{print $2*100/($1+$2+$3+$4+$5+$6+$7+$8+$9)}')
export $usage
s=`cat cnt`
cntt=$((${s: (-1)}+1))

if [ ${usage%%.*} -gt 70 ]
then
echo $cntt > cnt
fi

if [ $(($cntt%3)) -eq 2 ]
then
curl -X POST -H 'Content-type: application/json' --data '{"text":"J021 CPU is now ALARM: usage is over 70%"}' https://hooks.slack.com/services/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
touch monitoring/`date +%Y%m%d`-`date +%H%M%S`
fi
