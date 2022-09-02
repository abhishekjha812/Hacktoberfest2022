Fork the project: Click the gray Fork button in the top right of this page. This creates your copy of the project and saves it as a new repository in your github account

Click on the green Code button, then either the HTTPS or SSH option and, click the icon to copy the URL. Now you have a copy of the project. Thus, you can play around with it locally on your computer.

Run the following commands into a terminal window (Command Prompt, Powershell, Terminal, Bash, ZSH). Do this to download the forked copy of this repository to your computer.

  git clone https://github.com/YOUR_GITHUB_USERNAME/hacktoberfest-practice.git
Switch to the cloned folder. You can paste this command into the same terminal window.
  cd hacktoberfest-practice
Make a new branch. Your username would make a good branch because it's unique.
  git checkout -b <name-of-new-branch>
Open the README.md file

Add your name to the section that matches your Initial in this list. Then, add your name in alphabetical order. Then save your changes.

For example - [Full Name](https://github.com/your-username)

Stage your changes.

  git add README.md
or

  git add .
Commit the changes.
  git commit -m "Add <your-github-username>"
Check the status of your repository.
  git status
The response should be like this:
On branch <name-of-your-branch>
nothing to commit, working tree clean
Pushing your repository to GitHub.
  git push origin <name-of-your-branch>
or

  git branch -M main
  git push -u origin main
