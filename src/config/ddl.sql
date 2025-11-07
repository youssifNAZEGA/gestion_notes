DROP TABLE students;
CREATE TABLE IF NOT EXISTS students (
  id integer PRIMARY KEY autoincrement,
  firstname TEXT,
  lastname TEXT,
  sexe TEXT,
  birth_day DATE,
  check(sexe in ('M', 'F'))
  );