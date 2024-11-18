#!/bin/bash

# Directory containing SVG files
SVG_DIR="../wp-content/themes/veeva2015/assets/svg/icons/"
OUTPUT_FILE="../docs/foundation/icons.json"

# Start the JSON structure
echo '{ "icons": [' > "$OUTPUT_FILE"

# Get the list of SVG files in the directory
svg_files=("$SVG_DIR"/*.svg)

# Iterate over all SVG files in the directory
for i in "${!svg_files[@]}"; do
  # Get the file name without the extension
  svg_file="${svg_files[$i]}"
  filename=$(basename -- "$svg_file")
  name="${filename%.*}"

  # Check if it's the last item in the array
  if [ "$i" -lt $((${#svg_files[@]} - 1)) ]; then
    # Add a comma if it's not the last item
    echo "  { \"name\": \"$name\", \"path\": \"$filename\" }," >> "$OUTPUT_FILE"
  else
    # Don't add a comma for the last item
    echo "  { \"name\": \"$name\", \"path\": \"$filename\" }" >> "$OUTPUT_FILE"
  fi
done

# End the JSON structure
echo ']}' >> "$OUTPUT_FILE"

# Inform the user
echo "JSON file generated: $OUTPUT_FILE"
