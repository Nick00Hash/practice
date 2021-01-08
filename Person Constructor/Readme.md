The chain of commands I used to move existing code into a new repository.

git checkout master
git remote add r1remote **Add URL Here**
git fetch r1remote
git merge r1remote/master --allow-unrelated-histories
git remote rm r1remote