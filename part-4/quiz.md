- When you run a command in the terminal, where does BASH look for that command?
  It looks through the directories set in $PATH.

- On a UNIX computer, how do you stop a running process?
  Use the kill -n PID command where -n is the signal number. I usually use kill -2 or it's shortcut Control-c

- What packages do you have installed via homebrew?
  shellheck, eslint, postgresql, node, and exercism

- On a UNIX computer, how do you find the process id of a running process?
  Typing the command ps will show all processes that are running including the PID of each process.

- In a terminal, what does control-c do?
  control-c interrupts which is a form of killing or stopping the current process

- In a terminal, what does control-a do?
  control-a moves the cursor to the beginning of the current line

- In a terminal, what does control-e do?
  control-e moves the cursor to the end of the current line

- What keyboard shortcut do you use to split the screen in your editor?
  command-k and then the direction

- What keyboard shortcut do you use to split the screen in your terminal?\
  command-d

- When a terminal command completes, how can you tell if it was successful or not?
  Typing $? will return the ext status code of the previous command: 0 means it was successful, 1 means it failed.

- What does your `~/.gitconfig` have in it? (paste the whole file here)

  # This is Git's per-user configuration file.

  [user]

  # Please adapt and uncomment the following lines:

  # name = Michelle Charles

  # email = michellecharles@LGs-MacBook-Pro.local

  [user]

  ```
  name = MsMishi
  email = mcwcharles@gmail.com
  ```

  [core]

  ```
  editor = atom
  excludesfile = /Users/michellecharles/.gitignore_global
  ```

- What is the difference between a relative and absolute path?
  An absolute path is relative to the root directory while a relative path is relative to the current directory.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?
  cd ../pinterest-for-dogs

- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
  command-o

- What files or folders do you want all git repositories to ignore?
  .DS_Store and node_modules are my choices maybe .env but I don't use it often enough yet.

- What is the main difference between `==` and `===` in JavaScript?
  `===` checks for strict equality without performing any conversions (e.g. 1 === '1' //false) while `==`checks for abstract equality by performing a type conversion when comparing two things (e.g. 1 == '1' // true).
