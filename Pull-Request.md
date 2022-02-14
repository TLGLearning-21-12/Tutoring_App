# Code Review

Code reviewing a developer's code can take on many forms.

1. You can review the code and demo the functionality live, with a code review buddy 
2. You can share code into the repo for the code reviewer to review when they can.

We will be doing the first of these workflows.

## Step-by-step guide with A Buddy 👤👤

#### Pro Tip :zap: 

> If you start this process before you do an `add` command then you can use the UI tools and git bash window to very easily identify the pending changes in the working directory.
**_Assumptions_**

These instructions assume that you are on your own branch named `MY-BRANCH-NAME`. If you're not these directions will run you in the wrong direction so be sure to start from your feature branch.

If you are not on your own branch, you should run this command:

```bash
git checkout -b MY-BRANCH-NAME 
```

> MY-BRANCH-NAME could be something like greg-rojas/theThingIamAWorkingOn


1. Get a buddy 👤👤 to do all the following steps with you
   1. This is an interactive process so you you are the Buddy, you should ask questions and provide feedback about the code.
2. Run "Git Bash"
3. `cd` into your working directory in your working/Branch.
4. Verify pending changes

## Verify Changes

- Your budy should review all your code changes with you.
- You should explain to your buddy what the code is doing and why
- Verify that there are no errant changes to files that should not be modified. 
- Verify all changes are meaningful and that you are not just committing white space.
- You should run :runner: your code and demonstrate a working product

``` bash
# View Pending Changes
git status
```
Add all current changes, i.e. stage untracked files and changes

``` bash
# Add current changes
git add -A
```

Commit changes with message

``` bash
# Commit changes
git commit -m 'meaningful messages of what you did'
```

Switch (or checkout) to main branch

```bash
# switch to main (this is an extra step to try and keep things in an easier place to roll back from )
git checkout main
```
Get the last master code down to your machine

```bash
# this will `fetch` and `merge` your master with the remote paster
git pull origin main
```

You should not have any messages that indicated a merge at this point. If so, speak with an instructor until you know how to handle these situations. Next we switch back to our branch

```bash
git checkout MY-BRANCH-NAME
```
## Time to Merge  

```bash
# merge the local main branch into my own
git merge main
```

At this point you may find yourself in a merge situation. 

A place where you have to manually look at the code files and determine why Git could determine which changes to adopt. 

---
## Time to Earn the Big Bucks :red_circle:

If you find yourself in a merge situation you have to be very careful to resolve all changes before moving forwad. 

Moving forward without resolving all the conflicts in every file will leave your code files in corrupted format. 

- YOU MUST CONTINUE TO WORK THROUGH THIS WITHE A BUDDY     👤👤
- You and your buddy must inspect all conflicts and decide what code to adopt. 
- Make note of these decisions.
- Using your UI tools reslove any conflicts in all files.
-  Run/Test/Verify Your Code

**You are not done "merging" until your git bash command line is free of the "(xxxxxx | merging)".** 

If you were prompted to merge you have to run the commands of `add` and `commit` to complete the merge process. 

-------------

What happens next is determined by if you had to merge. 

In any instance though, you need to run all your development servers to make sure they at least spin up.

If you did NOT have to merge you can just run through the code again as a sanity pass and move on the next steps.

**If you did have to merge**, you have to treat this code base like it was brand new and give it a thorough walk through by code review and demo and run the code you expect to be working.

# Merge with Care​ 

Every time you go through a merge you have to take great care in testing your code. 

The merge indicates that there are changes to your application. 

Your application is your work product. 

Examine it carefully.

You will have ample opportunities to double check, or triple check your work before you accept any merge requests. 

Take every advantage to make sure you are not removing anyone's work.


```bash
# check status of files
git status
```

## Push to server

```bash
# push to server
git push origin HEAD
```

## Pull Request

It is now time to submit a pull request or PR
