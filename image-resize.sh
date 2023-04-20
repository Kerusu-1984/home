#!/bin/bash

# This script will resize all images in the public/blog folder to a max width of 500px

IMAGE_FOLDER="public/blog"

for file in $(find "$IMAGE_FOLDER" -type f)
do
  if [[ "$file" == *".png" || "$file" == *".jpg" || "$file" == *".jpeg" ]]
  then
      width=$(identify -format "%w" "$file")
      if [[ $width -gt 500 ]]
      then
        height=$(identify -format "%h" "$file")
        new_height=$(echo "scale=0; 100 * 500 / $width * $height / 100" | bc)
        echo "Resizing $file to 500x$new_height"
        convert "$file" -resize 500x$new_height "$file"
      fi
  fi
done