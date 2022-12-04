# 01-git-vc-system

```
cd noe-fetch
npm i
node index.js
```

### กรณีที่ branch main นำ branch ที่เราจะ deverlop ให้ใช้ rebase 
```
git switch deverlop
git rebase main
``` 

### เมื่อเรา develop ที่ branch ที่เราสร้างเสร็จแล้ว เมื่อเราจะรวมเข้ากับ branch main ให้กลับไปที่ main

```
git switch main
git merge deverlop
```