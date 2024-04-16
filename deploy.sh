cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:south-asian-canadian-digital-archive/legal-history-page.git main:build
