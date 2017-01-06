msg='release'

if [ -n "$1" ]
then
    msg=$msg$1
fi

npm run build
git add .
git commit -m $msg
git push origin master

