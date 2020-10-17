USE week2;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM user_task
  JOIN task ON task_id = task.id
  JOIN user ON user_id = user.id
WHERE `email` LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM user_task
  JOIN task ON task_id = task.id
  JOIN user ON user_id = user.id
  JOIN status ON status_id = status.id
WHERE user.name = 'Donald Duck'
  AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.*
FROM user_task
  JOIN task ON task_id = task.id
  JOIN user ON user_id = user.id
  JOIN status ON status_id = status.id
WHERE user.name = 'Maryrose Meadows'
  AND month(task.created) = 9;
  
-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(*),
  MONTH(created)
FROM task
GROUP BY MONTH(created);