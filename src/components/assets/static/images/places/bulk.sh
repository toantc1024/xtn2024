#!/bin/bash

i=1
for file in *.jpg
do
    mv "$file" "image_${i}.jpg"
    i=$((i+1))
done