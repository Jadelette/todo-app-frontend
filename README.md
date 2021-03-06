# Tasklist App Interface

This is a simple user interface for a 'to-do list' application.

To use it, clone the repo and run npm install followed by npm start using command line.

## Adding a new Task

Enter a task that you wish to add to the to-do list, such as 'walk the dog', in the first input field labelled 'Task' 

Next select a due date for the task using the date picker labelled 'Due'.

Click the 'add' button or hit return. 

Your task will appear in your to-do list. You can add as many tasks as you like, in the same manner. 

A green tick next to a task indicates that it is on-track (i.e. the due date is not yet past), while a red x indicates that a task is overdue. 

A task cannot be added with a due date in the past, or without a task description or due date entered. 

## Archiving a Task when Complete

To archive a task as completed, press the 'done' button. Archived tasks appear in the Completed Tasks list, below active tasks. 

Active tasks are displayed in date order; those with the closest due date appear at the top of the list. 

If you accidentally archive a task that is not complete, you can return it to the active tasks list by clicking 'restore'.

Completed tasks are displayed with the most recently archived task at the top of the list.

## Deleting a Task

To remove a task that you no longer wish to complete, press the 'delete' button that is displayed alongside each task in the Active Tasks list. 

If you have already archived the task as complete, you will need to restore the task to active in order to delete it.




