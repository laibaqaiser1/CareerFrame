#!/bin/bash

# CareerFrame Build Script for AWS Deployment
echo "Building CareerFrame for AWS deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the frontend
echo "Building frontend..."
npm run build

# Create deployment folder
echo "Creating deployment package..."
mkdir -p deployment-package

# Copy built files
cp -r dist/* deployment-package/
cp -r server deployment-package/
cp -r shared deployment-package/
cp package.json deployment-package/
cp package-lock.json deployment-package/

# Copy important files
cp aws-deployment-guide.md deployment-package/
cp project-export-guide.md deployment-package/
cp README.md deployment-package/ 2>/dev/null || echo "No README found"

echo "✅ Build complete! Files ready in 'deployment-package' folder"
echo "📦 You can now download the deployment-package folder"
echo "🚀 Follow the AWS deployment guide to publish your site"