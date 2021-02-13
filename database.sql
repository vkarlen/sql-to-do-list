-- Clear table if it exists
DROP TABLE IF EXISTS "task_list";

-- Create Table
CREATE TABLE "task_list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(1024),
	"isDone" BOOLEAN DEFAULT FALSE
);