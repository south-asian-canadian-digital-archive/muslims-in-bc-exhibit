#!/usr/bin/env bash
set -e  # Exit immediately if a command exits with a non-zero status

pnpm build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:south-asian-canadian-digital-archive/muslims-in-bc-exhibit.git main:build

echo "✅ Deployment successful!"
