 SELECT * FROM test.task;

-- Find out how many tasks are in the task table
 SELECT COUNT(id) FROM test.task;

-- Find out how many tasks in the task table do not have a valid due date
 SELECT COUNT(id) FROM test.task 
 WHERE due_date 
 IS NULL;

-- Find all the tasks that are marked as done
 SELECT * FROM test.task 
 WHERE status_id = 3;

-- Find all the tasks that are not marked as done
 SELECT * FROM test.task 
 WHERE status_id != 3;

-- Get all the tasks, sorted with the most recently created first
 SELECT * FROM test.task 
 ORDER BY created DESC;

-- Get the single most recently created task
SELECT * FROM test.task 
ORDER BY created DESC 
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM test.task
WHERE `description` LIKE '%database%' 
OR title LIKE '%database%';

-- Get the title and status (as text) of all tasks
SELECT title, name
FROM test.task
JOIN test.status
ON test.task.status_id = test.status.id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT COUNT(*), name
FROM task
JOIN status
ON task.status_id = status.id
GROUP BY name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT COUNT(*) AS quantity , name
FROM task
JOIN status
ON task.status_id = status.id
GROUP BY name
ORDER BY quantity DESC;