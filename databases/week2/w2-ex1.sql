SELECT * FROM week2.task;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (id, title, description, created, updated, due_date, status_id) 
VALUES (0, 'Bake', 'Guava cheesecake', '2020-10-14 10:54:16', '2020-10-14 14:54:16', '2020-10-18 15:00:00', 1);

-- Change the title of a task
UPDATE task 
SET title = 'Knit vest'
WHERE id = 21;

-- Change a task due date
UPDATE task
SET due_date = '2017-10-28 16:00:00'
WHERE id = 13;

-- Change a task status
UPDATE task
SET status_id = 1
WHERE id = 11;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 34;

-- Delete a task
DELETE FROM task
WHERE id = 16;
