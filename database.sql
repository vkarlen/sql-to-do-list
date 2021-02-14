-- Clear table if it exists
DROP TABLE IF EXISTS "task_list";

-- Create Table
CREATE TABLE "task_list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(1024),
  "priority" VARCHAR(1),
	"isDone" BOOLEAN DEFAULT FALSE,
  "timeDone" DATE
);