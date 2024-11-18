#!/bin/bash

directory="${1:-.}"
environment="${2:-dev}"

find "$directory" -type f -name "*.html" | while read -r file; do
    if [ $environment == "dev" ]; then
        sed -i '' 's/href="\/com-lib-test\/"/href="\/docs\/"/g' "$file"
    elif [ $environment == "prod" ]; then
        sed -i '' 's/href="\/docs\/"/href="\/com-lib-test\/"/g' "$file"
    fi
done