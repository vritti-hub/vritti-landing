#!/bin/bash

# Vritti Landing Page - GitHub Pages Setup Script
# This script helps set up GitHub Pages deployment

echo "🚀 Vritti Landing Page - GitHub Pages Setup"
echo "============================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    echo "Please run this script from the root of your Vritti landing page repository"
    exit 1
fi

# Check if GitHub CLI is installed
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI detected"
    HAS_GH_CLI=true
else
    echo "⚠️  GitHub CLI not found - some steps will be manual"
    HAS_GH_CLI=false
fi

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  You're not on the 'main' branch"
    echo "GitHub Pages deployment is configured for the 'main' branch"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build test
echo ""
echo "🔧 Testing build process..."
if npm run build; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed - please fix build errors before deployment"
    exit 1
fi

# Check for required files
echo ""
echo "📋 Checking deployment files..."

if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ GitHub Actions workflow found"
    echo "📄 Using simplified deployment workflow"
else
    echo "❌ GitHub Actions workflow not found"
    exit 1
fi

if [ -f "out/index.html" ]; then
    echo "✅ Static export generated"
else
    echo "❌ Static export not found"
    exit 1
fi

# GitHub Pages setup instructions
echo ""
echo "📖 GitHub Pages Setup Instructions:"
echo "===================================="
echo ""
echo "1. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m \"Add GitHub Pages deployment\""
echo "   git push origin main"
echo ""
echo "2. Enable GitHub Pages:"
echo "   • Go to your repository on GitHub"
echo "   • Settings → Pages"
echo "   • Source: GitHub Actions"
echo ""
echo "3. Monitor deployment:"
echo "   • Actions tab will show deployment progress"
echo "   • Site will be available at: https://[username].github.io/vritti-landing/"
echo ""

# GitHub CLI automation
if [ "$HAS_GH_CLI" = true ]; then
    echo "🤖 GitHub CLI Automation Available"
    echo "=================================="
    read -p "Would you like to push to GitHub now? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Pushing to GitHub..."
        git add .
        git commit -m "Add GitHub Pages deployment configuration 🚀"
        git push origin main
        echo "✅ Pushed to GitHub!"
        echo ""
        echo "🔗 Open repository settings to enable GitHub Pages:"
        gh repo view --web
    fi
fi

# Custom domain setup
echo ""
read -p "Do you want to set up a custom domain? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your domain (e.g., vritti.ai): " DOMAIN
    if [ ! -z "$DOMAIN" ]; then
        echo "$DOMAIN" > public/CNAME
        echo "✅ CNAME file created with domain: $DOMAIN"
        echo ""
        echo "📋 DNS Configuration Required:"
        echo "=============================="
        echo "Add these DNS records:"
        echo "• CNAME: www.$DOMAIN → [username].github.io"
        echo "• A records for apex domain:"
        echo "  185.199.108.153"
        echo "  185.199.109.153"
        echo "  185.199.110.153"
        echo "  185.199.111.153"
    fi
fi

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Your Vritti landing page is ready for GitHub Pages deployment!"
echo ""
echo "Next steps:"
echo "• Push your changes to GitHub"
echo "• Enable GitHub Pages in repository settings"
echo "• Monitor deployment in the Actions tab"
echo ""
echo "Need help? Check DEPLOYMENT.md for detailed instructions."