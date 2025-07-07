# CI/CD Pipeline Configuration

This document explains how to set up and use the CI/CD pipeline for the Jasmine to BDD Cucumber POC project.

## 🚀 Pipeline Overview

The CI/CD pipeline automatically:

1. **Installs** dependencies
2. **Lints** code for quality
3. **Runs** Jasmine and Cucumber tests
4. **Generates** HTML test reports
5. **Publishes** reports as artifacts
6. **Deploys** reports to GitHub/GitLab Pages

## 📋 Available Configurations

### 1. GitHub Actions (`.github/workflows/ci.yml`)

- **Triggers**: Push to main/develop, Pull Requests
- **Matrix**: Tests on Node.js 18.x and 20.x
- **Artifacts**: Uploads test reports for 30 days
- **Pages**: Auto-deploys to GitHub Pages on main branch

### 2. GitLab CI (`.gitlab-ci.yml`)

- **Stages**: install → lint → test → report → deploy
- **Caching**: npm and Cypress cache optimization
- **Reports**: Exposes reports in GitLab UI
- **Pages**: Auto-deploys to GitLab Pages

### 3. Jenkins (`Jenkinsfile`)

- **Parallel**: Jasmine and Cucumber tests run in parallel
- **Reports**: HTML reports published in Jenkins UI
- **Artifacts**: Test results archived automatically
- **Deployment**: Configurable deployment stage

## 🛠️ Setup Instructions

### GitHub Actions Setup

1. Push code to GitHub repository
2. Enable GitHub Actions in repository settings
3. Enable GitHub Pages in repository settings
4. Pipeline runs automatically on push/PR

### GitLab CI Setup

1. Push code to GitLab repository
2. Ensure GitLab Runner is available
3. Enable GitLab Pages in project settings
4. Pipeline runs automatically on push

### Jenkins Setup

1. Create new Pipeline job in Jenkins
2. Configure SCM to point to your repository
3. Select "Pipeline script from SCM"
4. Install required plugins:
   - NodeJS Plugin
   - HTML Publisher Plugin
   - Pipeline Plugin

## 📊 Test Reports

### Report Formats Generated

- **HTML Report**: `reports/cucumber-report.html` (Human-readable)
- **JSON Report**: `reports/cucumber-report.json` (Machine-readable)

### Accessing Reports

#### GitHub Actions

- **Artifacts**: Download from Actions tab → Workflow run → Artifacts
- **Pages**: `https://username.github.io/repository/test-reports/`

#### GitLab CI

- **Artifacts**: Project → CI/CD → Jobs → Download artifacts
- **Pages**: `https://username.gitlab.io/repository/`

#### Jenkins

- **HTML Reports**: Job → HTML Reports → Cucumber Test Report
- **Artifacts**: Job → Build → Build Artifacts

## 🐳 Docker Support

### Local Development

```bash
# Start development environment
docker-compose up app-dev

# Run tests in container
docker-compose up test-runner

# View reports
docker-compose up reports
# Access at http://localhost:8081
```

### CI/CD Simulation

```bash
# Simulate CI/CD pipeline locally
docker-compose up ci-build
```

## 📝 NPM Scripts for CI/CD

```bash
# Complete CI pipeline
npm run test:ci

# Generate all report formats
npm run test:all-formats

# Clean previous reports
npm run clean

# Lint and fix code
npm run lint:fix
```

## 🔧 Configuration Files

| File                       | Purpose                 |
| -------------------------- | ----------------------- |
| `.github/workflows/ci.yml` | GitHub Actions pipeline |
| `.gitlab-ci.yml`           | GitLab CI pipeline      |
| `Jenkinsfile`              | Jenkins pipeline        |
| `Dockerfile`               | Development container   |
| `Dockerfile.ci`            | CI/CD container         |
| `docker-compose.yml`       | Local development stack |

## 📈 Pipeline Stages Explained

### 1. **Install Dependencies**

- Runs `npm ci` for consistent builds
- Caches node_modules for faster builds

### 2. **Code Quality (Lint)**

- Runs ESLint on source and test files
- Continues on warnings, fails on errors

### 3. **Testing**

- **Jasmine**: Unit tests for individual functions
- **Cucumber**: BDD integration tests
- Both must pass for pipeline to continue

### 4. **Report Generation**

- Creates HTML reports from test results
- Generates JSON for further processing

### 5. **Artifact Upload**

- Stores reports as downloadable artifacts
- Retains for 30 days (configurable)

### 6. **Deployment**

- Publishes reports to Pages (main branch only)
- Makes reports publicly accessible

## 🚨 Troubleshooting

### Common Issues

**Tests fail in CI but pass locally:**

- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review environment variables

**Reports not generated:**

- Ensure `reports/` directory exists
- Check file permissions
- Verify cucumber command syntax

**Pages deployment fails:**

- Check repository Pages settings
- Verify branch protection rules
- Ensure proper GitHub token permissions

### Debug Commands

```bash
# Check pipeline logs
# GitHub: Actions tab → Workflow run → Job
# GitLab: CI/CD → Pipelines → Job
# Jenkins: Build → Console Output

# Test locally with same commands
npm run test:ci

# Verify report generation
ls -la reports/
```

## 🔄 Continuous Improvement

### Metrics to Monitor

- **Build Time**: Optimize slow stages
- **Test Coverage**: Add missing test scenarios
- **Success Rate**: Fix flaky tests
- **Report Quality**: Enhance report content

### Future Enhancements

- Add code coverage reporting
- Implement security scanning
- Add performance testing
- Integrate with Slack/Teams notifications
- Add deployment to staging/production environments

## 📞 Support

For CI/CD pipeline issues:

1. Check pipeline logs first
2. Review this documentation
3. Test commands locally
4. Create issue with pipeline logs attached
