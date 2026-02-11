# Manual Deployment Instructions

## Issue
The Appwrite Cloud builder is encountering platform-specific build errors. As a workaround, you can manually upload your pre-built production files.

## Steps to Deploy

### 1. Build Locally (Already Done)
Your production files are ready in the `dist` folder.

### 2. Create Deployment Package
1. Navigate to the `dist` folder
2. Select all files inside (`index.html`, `assets` folder, etc.)
3. Compress them into a `.zip` file (e.g., `yosr-academy-build.zip`)
   - **Important**: The zip should contain the files directly, NOT a folder containing the files

### 3. Upload to Appwrite Console
1. Go to: https://fra.cloud.appwrite.io/console/project-69852cb4003496ea2e8d/sites/site-yosr-academy-v2/deployments
2. Click the **"Create Deployment"** button
3. Choose **"Manual Upload"**
4. Configure the deployment:
   - **Install Command**: Leave blank
   - **Build Command**: Leave blank  
   - **Output Directory**: `.` (dot - current directory)
   - **Activate Deployment**: ✓ Check this box
5. Upload your `yosr-academy-build.zip` file
6. Click **"Create"**

### 4. Wait for Activation
The deployment will be processed and activated automatically (takes ~30 seconds).

## Verification
Once deployed, test the form submission at your live site to confirm the database connection is working.

## Current Environment Variables
These are already configured in your Appwrite Site settings:
- ✅ VITE_APPWRITE_ENDPOINT
- ✅ VITE_APPWRITE_PROJECT_ID  
- ✅ VITE_APPWRITE_KEY

## Database Permissions
These have been set via API:
- ✅ `enrollments` collection: Public create access
- ✅ `recruitments` collection: Public create access
- ✅ `cvs` bucket: Public upload access

---

**Note**: The cloud build is failing due to Windows/Linux binary incompatibilities in esbuild/Rollup. This manual upload ensures your working local build goes live immediately.
