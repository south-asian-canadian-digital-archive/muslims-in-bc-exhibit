cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:south-asian-canadian-digital-archive/muslims-in-bc-exhibit.git main:build
