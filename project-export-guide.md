# CareerFrame Project Export Guide

## How to Download Your Project Files

### Option 1: Direct Download from Replit (Recommended)
1. In your Replit workspace, go to the Files panel (left sidebar)
2. Click the three dots (⋮) next to your project name
3. Select "Download as zip"
4. This will download all project files including:
   - All source code (HTML, CSS, JS, TS)
   - Images and assets
   - Configuration files
   - Documentation

### Option 2: Git Clone (For Developers)
1. Initialize git in your Replit project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push to GitHub/GitLab
3. Clone to your local machine

### Option 3: Individual File Copy
You can copy specific files by:
1. Opening each file in Replit
2. Selecting all content (Ctrl+A)
3. Copying and pasting into local files

## Your Project Structure
```
careerframe/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
│   ├── index.html         # Main HTML file
│   └── package.json
├── server/                # Backend Express app
│   ├── index.ts           # Main server file
│   ├── routes.ts          # API routes
│   └── email-service.ts   # Email functionality
├── shared/                # Shared types/schemas
├── attached_assets/       # Your images and documents
└── configuration files    # package.json, vite.config.ts, etc.
```

## What You'll Get
- ✅ Complete source code (React frontend + Express backend)
- ✅ All images and assets
- ✅ Configuration files for deployment
- ✅ Documentation and guides
- ✅ Email service integration
- ✅ Google Analytics setup
- ✅ All UI components and styling

## For AWS Deployment
Once you have the files locally, you can:
1. Create a GitHub repository
2. Push your code there
3. Connect to AWS Amplify
4. Deploy to www.careerframe.co.uk

## Next Steps After Download
1. Extract the zip file
2. Open in your preferred code editor (VS Code, etc.)
3. Run `npm install` to install dependencies
4. Run `npm run dev` to test locally
5. Follow the AWS deployment guide