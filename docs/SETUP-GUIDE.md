# GitHub Pages Setup & Monitoring Guide

## 🚀 Quick Setup Checklist

### 1. Enable GitHub Pages
- [ ] Go to repository Settings → Pages
- [ ] Select source: "GitHub Actions" or "Deploy from branch"
- [ ] If using branch: select `gh-pages` 
- [ ] Save settings

### 2. Configure Actions Permissions
- [ ] Settings → Actions → General
- [ ] Allow all actions and reusable workflows
- [ ] Enable read/write permissions
- [ ] Allow Actions to create PRs

### 3. Fix Token Permissions (if needed)
- [ ] Go to https://github.com/settings/tokens
- [ ] Edit existing token or create new one
- [ ] Enable scopes: `repo`, `workflow`, `write:packages`
- [ ] Update local git credentials

### 4. Update Dependencies (if lock file issues)
- [ ] Delete package-lock.json if sync issues occur
- [ ] Run `npm install` to regenerate lock file
- [ ] Commit new package-lock.json
- [ ] Then use `npm ci` in CI/CD

## 📋 Step-by-Step Instructions

### Repository Settings Configuration

1. **Navigate to Pages Settings:**
   ```
   https://github.com/hmaniar210/POC/settings/pages
   ```

2. **Source Configuration Options:**
   
   **Option A: GitHub Actions (Recommended)**
   - Source: "GitHub Actions"
   - This allows workflow to deploy directly
   
   **Option B: Branch Deployment**
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (auto-created by workflow)
   - Folder: `/ (root)`

3. **Actions Permissions:**
   ```
   https://github.com/hmaniar210/POC/settings/actions
   ```
   - Actions permissions: "Allow all actions"
   - Workflow permissions: "Read and write permissions"
   - ✅ Allow GitHub Actions to create and approve pull requests

### Monitoring Your Pipeline

1. **Access Actions Tab:**
   ```
   https://github.com/hmaniar210/POC/actions
   ```

2. **Workflow Run Details:**
   - Click on latest workflow run
   - View job: "test (20.x)" 
   - Check each step's logs
   - Download artifacts if available

3. **Expected Pipeline Steps:**
   ```
   ✅ Checkout code
   ✅ Setup Node.js 20.x
   ✅ Install dependencies  
   ✅ Run linting
   ✅ Run Jasmine tests
   ✅ Run Cucumber tests
   ✅ Generate Cucumber HTML Report
   ✅ Upload Cucumber Report
   ✅ Deploy to GitHub Pages (main branch only)
   ```

### Accessing Your Reports

1. **Pages URL Structure:**
   ```
   Base URL: https://hmaniar210.github.io/POC/
   Reports:  https://hmaniar210.github.io/POC/test-reports/cucumber-report.html
   ```

2. **Alternative Access Methods:**
   
   **Via Artifacts (immediate):**
   - Actions → Latest workflow → Artifacts section
   - Download "cucumber-report-node-20.x"
   - Extract and open cucumber-report.html
   
   **Via Pages (after deployment):**
   - Wait for "Deploy to GitHub Pages" job completion
   - Visit Pages URL above

## 🔧 Common Issues & Solutions

### Issue: "refusing to allow Personal Access Token"
**Solution:** Update token with `workflow` scope
```bash
# Update remote URL with new token
git remote set-url origin https://NEW_TOKEN@github.com/hmaniar210/POC.git
```

### Issue: Pages not found (404)
**Solutions:**
1. Check Pages settings are enabled
2. Ensure workflow completed successfully
3. Verify gh-pages branch was created
4. Wait 5-10 minutes for Pages to propagate

### Issue: Workflow fails on tests
**Debug steps:**
1. Check Actions logs for specific error
2. Test locally: `npm run test:ci`
3. Verify all dependencies installed
4. Check Node.js version compatibility

### Issue: Reports not generated
**Debug steps:**
1. Check if `reports/` directory exists after test run
2. Verify cucumber command in package.json
3. Ensure step definitions are found
4. Check file permissions

### Issue: "npm ci - lock file out of sync"
**Error:** `npm ci` can only install packages when package.json and package-lock.json are in sync
**Solution:** Update lock file first
```bash
# Delete existing lock file and node_modules
rm package-lock.json
rm -rf node_modules/

# Reinstall dependencies to create new lock file
npm install

# Now npm ci should work
npm ci
```

**Alternative Solution:**
```bash
# Update lock file without deleting
npm install --package-lock-only

# Then try npm ci again
npm ci
```

## 📊 Verification Commands

### Local Testing:
```bash
# Test full CI pipeline locally
npm run test:ci

# Check if reports are generated
ls -la reports/
cat reports/cucumber-report.html

# Test individual components
npm run test:jasmine
npm run test:cucumber
npm run test:cucumber:report
```

### Git Operations:
```bash
# Check current remote
git remote -v

# Push with verbose output
git push origin main --verbose

# Check branch status
git branch -a
```

## 📞 Quick Reference

| Task | URL |
|------|-----|
| Repository Settings | https://github.com/hmaniar210/POC/settings |
| Pages Settings | https://github.com/hmaniar210/POC/settings/pages |
| Actions Settings | https://github.com/hmaniar210/POC/settings/actions |
| Workflow Runs | https://github.com/hmaniar210/POC/actions |
| Token Management | https://github.com/settings/tokens |
| Your Pages Site | https://hmaniar210.github.io/POC/ |
| Test Reports | https://hmaniar210.github.io/POC/test-reports/ |

## 🎯 Success Indicators

✅ **Pages Enabled:** Green checkmark in Settings → Pages  
✅ **Workflow Passing:** Green checkmark in Actions tab  
✅ **Reports Generated:** Artifacts available for download  
✅ **Pages Live:** Reports accessible via Pages URL  
✅ **Auto-deployment:** New pushes trigger pipeline and update reports
