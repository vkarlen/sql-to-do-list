-- Create Table
CREATE TABLE "task_list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(1024),
	"isDone" BOOLEAN DEFAULT FALSE
);