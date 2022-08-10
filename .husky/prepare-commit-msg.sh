#!/bin/sh
#
# git prepare-commit-msg hook for automatically prepending an issue key
# from the start of the current branch name to commit messages.

# check if commit is merge commit or a commit ammend
if [ $2 = "merge" ] || [ $2 = "commit" ]; then
    exit
fi

# check if issue key already exists in commit message (eg. happens when rebasing)
EXISTING_ISSUE_KEY=`echo $(cat $1) | grep -o "[A-Z]\{2,\}-[0-9]\+"`

if [ ! -z "$EXISTING_ISSUE_KEY" ]; then
    # issue key exists in commit, use it
    exit
fi

ISSUE_KEY=`git branch | grep -o "\* \(.*/\)*[A-Z]\{2,\}-[0-9]\+" | grep -o "[A-Z]\{2,\}-[0-9]\+"`
if [ $? -ne 0 ]; then
    # no issue key in branch, use the default message
    exit
fi
# issue key matched from branch prefix, prepend to commit message
TEMP=`mktemp /tmp/commitmsg-XXXXX`
(echo "$ISSUE_KEY $(cat  $1)") > $TEMP
cat $TEMP > $1