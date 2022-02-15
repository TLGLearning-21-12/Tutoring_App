### Command Summaries

These tasks can very well be the most important tasks you perform as a developer and team member. 

Act accordingly.


# Pulling Down Latest

### When to do this?

- You would like to get the latest code from the remote source
- You do not have to be **not ready** to push your changes. You simply do not want to let too much time to pass between `pull` commands
  - If you let too much time pass then the merge work you will have to be perform could be large and unruly

---
_Assumption_

> These steps assume that your currently on your feature branch named  **YOUR-BRANCH-NAME**
### Command Summary

This sequence of commands is 1 variation of the commands that achieve the goal described above. This sequence attempts to leave your feature branch and `master` branch separate and local as long as possible. 

``` bash
# These steps assume that your currently on your feature branch named  **YOUR-BRANCH-NAME** 
# Change Directory the the folder you want to work in 
cd /c/SF.Code/CohortFolder/RepoName 
# verify that your working directory is dirty, meaning it has pending changes
git status
  
# the add command will "add" the current changes to the list of changes to be committed
git add -A
  
# commits the changes to history with the given message.
git commit -m 'this is my meaningful message for the implemented cool feature'
  
# checkout master and leave your current branch (checkout essentially switches to a new branch)
git checkout master
  
# pull does a fetch and merge so with this command we pulling from the remote master
git pull origin master
  
# checks out your feature branch
git checkout YOUR-BRANCH-NAME
  
#merge the local master into the current branch which we just switched into 
git merge master
```
### Danger Zone
At this point you may be prompted to merge. If you are, go to your UI tool to go through the merge process. 

Do not attempt to manually merge files by opening the files directly in a code editor 

Use a tool that has a user interface and is built for resolving merge conflicts.

```bash
# once you have completed the merge you will may need to do an
git add -A 
# Followed by a 
git commit -m  "meaningful message here about the code i just merged"
```

### Verify Merge is Complete

```bash
# double check the status of the files to what we expect
git status
# ⚠️ doe the bash command line end with `merging (.... )` 
# if you see the merging(....) at the end you are not done. 
```
### Not Done?
If you still see the "merging" text at the end of your bash command then you still have work to either "add" and/or "commit"

If it is unclear be sure to ask an instructor.


## Don't Forget :warning: 

Since this is just a summary of commands it does not include

  - The testing you should have conducted prior to pushing
  - The steps you should have done with another developer to review your work and steps

----------------
# Pulling + Pushing

### Command Summary

The following commands can be added to the end of the "Pulling" commands above. 

Before you attempt to push any code you should verify that you code still works. So you must do a quick run through of your functionality. 

**The importance of you running and testing your code before you push cannot be overstated.**

1. The fact that you merged your code means that the application you could be running is brand new.
2. Be sure to test your UI and all web servers.

``` bash
# double check the status of the files to what we expect. if there are any changes you should add and commit
git status
# push changes to the remote branch 
git push origin HEAD
```


## Don't Forget :warning: 

Since this is just a summary of commands it does not include 

  - The testing you should have conducted prior to pushing
  - The steps you should have done with another developer to review your work and steps



## Database

Do not neglect code review in the Database



## What's Next

This does not include the steps to conduct a Pull Request. 

Please find the steps in this wiki to help walk you through those steps.
