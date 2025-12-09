# 🎓 Campus Event Dashboard – G12
##TEAM MEMBERS
`Abhishek Anant Dige`,`Atin Gourav`,`Rishiraj Singh`,`Smith Jain`,`Atul Pal`

Welcome, teammates 👋  
This README explains everything — from how our project structure works to how we’ll use GitHub like pros.  
No need to Google anything; this one file is your full survival kit 😎

---

## 💡 PROJECT CONTEXT
We’re building a **Campus Event Dashboard** as our group project.  
The features include:
1. Navigation Bar (Navbar)
2. Carousel (Home Section)
3. User Registration Form
4. User Data Table
5. Bootstrap Grid Layout (Cards Section)
6. Modal Popup (On Apply Button Click)
7. Alert Message
8. Footer

---

## 🎯 GOAL
We’ll all contribute to one shared repository but **work in our own branches**,  
so nobody messes up anyone else’s code.

---

## ⚙️ HOW OUR GIT SYSTEM WORKS

Let’s break it down in human language 👇  

### 🧠 The setup idea
Each person works on their own branch.  
When done, they push their code and open a **Pull Request (PR)** to merge it into the `main` branch.  

Think of:
- `main` = final version
- critical branch = your personal sandbox
- PR = sending your finished part for merging
- `git pull` = bringing everyone else’s updates into your branch

---

### 🧩 Step-by-Step Flow

2️⃣ Each member switches to their branch after creating it

Example (for Member A):

git clone <repo-link>
cd <repo-name>
git checkout critical


Now you’re in critical branch, safe to edit files.

You make your part (like navbar and footer).
Once ready:

git add .
git commit -m "Navbar completed"
git push origin critical

3️⃣ Pull Request Time (merging work)

Go to GitHub

You’ll see “Compare & pull request” → click it

Base branch = main
Compare branch = critical branch 

Add message:

Added Navbar Section ✅

Click “Create pull request”

Wait for Abhishek to merge it

4️⃣ Staying updated with new merges

After Abhishek merges someone else’s part, everyone needs to update their branch so they have the newest files:

git checkout main
git pull origin main      # Gets the latest version
git checkout carousel     # Switch to your branch
git merge main            # Bring main’s updates into your branch


This keeps your work up to date with everyone else’s code and prevents conflicts.

💬 Why this system works

Because:
✅ Everyone works independently
✅ Conflicts are avoided
✅ The owner keeps main clean and functional
✅ Everyone learns real GitHub teamwork

🧾 GITHUB COMMANDS CHEATSHEET (FOR DUMMIES ❤️)
Command	What it Does
`git clone <repo-link>`	Download repo to your computer
`git checkout -b branchname`	Create & switch to a new branch
`git checkout branchname`	Switch to an existing branch
`git branch`	Show all branches
`git status`	Show changed files
`git add .`	Add all changed files
`git commit -m "message"`	Save work locally
`git push origin branchname`	Upload work to GitHub
`git pull origin main`	Get latest version of main
`git merge main`	Merge main’s code into your branch
`git log --oneline`	View commit history
🧱 PRACTICAL WORKFLOW EXAMPLE

Imagine everyone’s working on different parts:

A runs:

git clone <repo>
git checkout critical


A makes navbar changes

git add . → git commit -m "Navbar done" → git push origin navbar

A opens PR on GitHub

Abhishek merges it into main

Everyone else updates their branch:

git pull origin main
git merge main


Work continues smoothly 🎉

**⚠️ COMMON MISTAKES TO AVOID**

❌ Don’t work on main directly
❌ Don’t forget to pull before pushing new changes
❌ Don’t open PRs until your section is actually ready
❌ Don’t freak out over merge conflicts — just tell Abhishek calmly 😎

🏁 TL;DR (Too Long; Didn’t Read)(**SUMMARY HERE FOR LAZY ONES**)

1️⃣ Clone repo
2️⃣ Switch to critical branch
3️⃣ Do your part
4️⃣ Commit + push
5️⃣ Open pull request
6️⃣ Abhishek merges critical into main
7️⃣ Everyone pulls latest main before continuing

💬 Final Note

This README isn’t just a guide — it’s your map.
Follow it and we’ll build something clean, organized, and actually impressive for viva 😎
If you’re confused at any step, ping Abhishek instead of guessing random commands.

Made with ❤️ by Team Spiders
#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 1ee8b21 (Initialize project using Create React App)
