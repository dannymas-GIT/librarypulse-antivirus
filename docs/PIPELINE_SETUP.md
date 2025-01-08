# LibraryPulse CI/CD Pipeline Setup Guide

This document outlines the steps taken to set up the CI/CD pipeline for the LibraryPulse Antivirus service, including challenges encountered and their solutions.

## Initial Setup Steps and Challenges

### 1. Repository Setup
- Created GitHub repository `librarypulse-antivirus`
- Added initial codebase (frontend React application)
- Created comprehensive README.md

### 2. Branch Protection
- Initially tried classic branch protection
- Switched to modern Branch Rulesets (recommended)
- Configuration:
  ```
  - Include default branch (main)
  - Restrict deletions
  - Block force pushes
  - Require pull request before merging
  - Require status checks to pass
  ```
- Initially enabled signed commits but removed due to unnecessary complexity

### 3. GitHub Secrets Setup
- Repository-level secrets (not environment):
  ```
  DOCKER_USERNAME
  DOCKER_TOKEN
  LIGHTSAIL_HOST
  LIGHTSAIL_USERNAME
  LIGHTSAIL_SSH_KEY
  SNYK_TOKEN
  ```
- Chose repository-level over environment secrets for consistency across repositories

### 4. Pipeline Issues and Solutions

#### Issue 1: Snyk Authentication
```
ERROR: Authentication error (SNYK-0005)
```
**Solution**: Added Snyk token to repository secrets

#### Issue 2: npm Dependencies
```
npm error Missing: is-string@1.1.1 from lock file
```
**Solutions Attempted**:
1. First try: Regenerate package-lock.json locally ❌
2. Second try: Modify package-lock in CI (failed) ❌
3. Final solution: Use `--legacy-peer-deps` flag ✅
```yaml
run: |
  npm install --legacy-peer-deps
```

#### Issue 3: ESLint Configuration
```
ESLint couldn't find a configuration file
```
**Solution**: 
1. Created `.eslintrc.json`
2. Added required ESLint plugins
3. Configured React/TypeScript rules

### 5. Key Files Created/Modified

#### CI/CD Workflow
```yaml
name: CI/CD Pipeline
jobs:
  security-scan:
    # Security checks
  test-and-build:
    # Testing and building
  docker-build-push:
    # Docker operations
  deploy:
    # Deployment to Lightsail
```

#### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ]
}
```

## Best Practices Learned

1. **Branch Protection**
   - Use new Branch Rulesets instead of classic protection
   - Start with essential protections only
   - Add more restrictions as needed

2. **Secrets Management**
   - Use repository secrets for shared credentials
   - Use environment secrets only for environment-specific values
   - Document all required secrets in README

3. **Dependency Management**
   - Use `--legacy-peer-deps` for complex dependency trees
   - Keep package-lock.json in version control
   - Handle npm warnings appropriately

4. **Pipeline Structure**
   - Sequential jobs with clear dependencies
   - Proper caching for npm and Docker
   - Clear separation of concerns between stages

## Future Improvements

1. **Dependency Updates**
   - Address deprecated package warnings
   - Update to latest ESLint version
   - Review and update peer dependencies

2. **Security Enhancements**
   - Implement more detailed security scanning
   - Add container vulnerability scanning
   - Implement secret rotation

3. **Performance Optimization**
   - Optimize Docker layer caching
   - Improve npm install speed
   - Parallel job execution where possible

## Reference Links
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [ESLint Configuration](https://eslint.org/docs/latest/use/configure/) 