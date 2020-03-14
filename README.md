# slack-member-contribution-tracking
This is the functionality that allows a slack post to go to a tracking system for member contributions
AMT Wiki Post for this repo: https://wiki.acemonstertoys.org/slack-member-contribution-tracking/

This was set up to work in the Ace Monster Toys Makerspace Slack workspace
It is the slash command functionality that posts and entry to a google spread sheet.

The user types in /task and then what they did (there is a prompt that request they type location then the thing they did). The slack user, time date and post message are then recored in the spread sheet. 

That data is currently imported 1x per month to generate analyitics for the Monthly State of the Org report.

It was based on this tutorial:https://davidwalsh.name/using-slack-slash-commands-to-send-data-from-slack-into-google-sheets

it posts messages to this spreadsheet (permissions requqired): https://docs.google.com/spreadsheets/d/1CS4AtLIwYrsSmlOHbDO3xH64H6te0oKRa6Bf7HgEZlQ/edit?usp=sharing


**Realated Links**
https://wiki.acemonstertoys.org/amt-software-development/
