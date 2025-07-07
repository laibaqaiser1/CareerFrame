# CareerFrame AWS Deployment Guide

## Overview
This guide will help you deploy your CareerFrame website to AWS using several AWS services for a professional, scalable deployment.

## Recommended AWS Architecture

### 1. **AWS Amplify** (Recommended - Easiest)
- **What it does**: Fully managed hosting for static sites and SPAs
- **Benefits**: 
  - Automatic builds from Git repository
  - SSL certificates included
  - CDN (CloudFront) integration
  - Custom domain support (www.careerframe.co.uk)
  - Automatic deployments on code changes

### 2. **Alternative: S3 + CloudFront**
- **What it does**: Static website hosting with global CDN
- **Benefits**: 
  - Lower cost for simple sites
  - More control over configuration
  - Excellent performance globally

## Deployment Steps for AWS Amplify (Recommended)

### Step 1: Prepare Your Repository
1. Create a GitHub repository for your CareerFrame code
2. Push all your current code to the repository

### Step 2: AWS Amplify Setup
1. Go to AWS Console → AWS Amplify
2. Click "New app" → "Host web app"
3. Connect your GitHub repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Step 3: Custom Domain Setup
1. In Amplify console, go to "Domain management"
2. Add custom domain: www.careerframe.co.uk
3. AWS will provide DNS settings to configure with your domain registrar

### Step 4: Environment Variables
Add these in Amplify console under "Environment variables":
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY` 
- `AWS_REGION`

## Build Configuration for AWS

Your website needs to be built for production deployment. Here's what needs to be configured:

### Frontend Build
- Vite will build your React app into static files
- These files will be served by AWS Amplify/S3

### Backend API
For the backend (Express server), you have two options:

#### Option A: AWS Lambda + API Gateway
- Convert your Express app to serverless functions
- Each API endpoint becomes a Lambda function
- API Gateway handles routing

#### Option B: AWS ECS/EC2
- Deploy your Node.js Express server on container service
- More traditional server deployment

## Email Service (Already Configured)
- Your AWS SES email service is already set up
- No changes needed - emails will work automatically

## Database Considerations
Currently using in-memory storage. For production, consider:
- **AWS RDS** (PostgreSQL) for persistent database
- **AWS DynamoDB** for NoSQL option

## Cost Estimates
- **AWS Amplify**: ~$15-30/month for typical traffic
- **S3 + CloudFront**: ~$5-15/month for typical traffic
- **SES**: Essentially free for low email volumes
- **Domain**: Already owned

## Next Steps
1. Would you like me to help set up a GitHub repository for your code?
2. Do you prefer AWS Amplify (easier) or S3+CloudFront (more control)?
3. Should we configure the backend as serverless (Lambda) or traditional server (ECS)?