DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id INT GENERATED ALWAYS AS IDENTITY,
    project_name VARCHAR(30) UNIQUE NOT NULL,
    project_subheading VARCHAR(100),
    project_date DATE,
    project_description VARCHAR(2000),
    project_img VARCHAR(500),
    project_video VARCHAR(500),
    project_likes INT DEFAULT 0
);
