CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(250) NOT NULL,
	"gender" VARCHAR(12) NOT NULL,
	"age" INTEGER NOT NULL,
	"ready_to_transfer" VARCHAR(1) NOT NULL,
	"notes" VARCHAR(400)
);

INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") VALUES
('Scotty', 'M', 4, 'Y', 'Born in Guatemala'),
('Jean', 'F', 5, 'Y', 'Born in Guatemala'),
('Ororo', 'F', 7, 'Y', 'Born in Guatemala'),
('Logan', 'M', 15, 'Y', 'Born in Guatemala'),
('Charlie', 'M', 9, 'Y', 'Born in Guatemala'),
('Betsy', 'F', 4, 'Y', 'Born in Guatemala');
