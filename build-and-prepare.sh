#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Copy static files to the server directory for production serving
echo "Copying static files for production serving..."
cp -r dist/public server/public

echo "Build and preparation complete!"
echo "Static files are now available in server/public for production deployment"