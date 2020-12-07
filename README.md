# sad

> ## `S`earch for lines, then `A`dd or `D`elete strings around them.

A shell command that searches a file for lines that match a regular expression and adds or removes strings before or after them.

## Installation

Note: Replace `/directory/set/in/$PATH/` to suit your environment, for example `/usr/local/bin/`.

In your terminal:
```shell
$ git clone git@github.com:aotree/sad.git

$ cd sad/

$ # Allow 'sad' command to be used without './'
$ cp src/sad /directory/set/in/$PATH/
```

## How it works

1. Search the [file] for lines that match a [regexp]
2. Add or delete [string] before or after matched line

## How to use

Usage:
```shell
$ sad [option] [string] [regexp] [file]
```

- Option:
  - -h: Display help
  - -a: Add [string] at the begining of the line
  - -A: Add [string] at the end of the line
  - -d: Delete [string] at the begining of the line
  - -D: Delete [string] at the end of the line

### Note

If you use special characters in the [string], escape them.

- e.g.)
  - If you add or delete #, pass \\# for $2.
  - If you add or delete ;, pass \\; for $2.
  - If you add or delete //, pass \\\\/\\\\/ for $2.
  - If you add or delete <!--, pass \\<\\!\\-\\- for $2.
  - If you add or delete -->, pass \\\\-\\-\\> for $2.
