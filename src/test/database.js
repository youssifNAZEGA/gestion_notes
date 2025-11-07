import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// you would have to import / invoke this in another file
export async function openDb () {
  return open({
    filename: '/home/youssif/Documents/S5/NodeJs/gestion_notes/src/db.sqlite',
    driver: sqlite3.Database
  })
}

const db = await openDb();

const ddl = `
  CREATE TABLE IF NOT EXISTS students (
  id integer PRIMARY KEY autoincrement,
  firstname TEXT,
  lastname TEXT,
  sexe TEXT,
  birth_day DATE,
  check(sexe in ('M', 'F'))
  )
`;

const dml = `
  INSERT INTO students (firstname,lastname,sexe,birth_day)
  VALUES ('Abdoul Malik', 'KONDI', 'M','1992/01/01'),
          ('Nabila','GOUNTANDI','F','1992/01/01'),
          ('Mansour','Yerima','M','1992/01/01'),
          ('Socrate','DADO','M','1992/01/01'),
          ('Ramdane','AROUNA','M','1992/01/01'),
          ('Rois','AGAO','M','1992/01/01')
`;

await db.exec(ddl);
await db.exec(dml);


console.log(db);
