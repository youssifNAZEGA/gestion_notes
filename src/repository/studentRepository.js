import Repository from "./repository.js";
import Database from "../config/database.js";

export default class StudentRepository extends Repository{

    constructor(){
        super();
    }


    async save(student_data){
        const db =await Database.getDatabaseInstance();
        const {firstname, lastname, sexe, birth_day} = student_data
        const insert = `
            INSERT INTO students(firstname, lastname, sexe, birth_day)
            VALUES (:firstname,:lastname,:sexe,:birth_day)
                
        `;
        const {lastID} = await db.connection.run(
            insert,
            {
               ':firstname' : firstname,
               ':lastname' : lastname,
               ':sexe' : sexe,
               ':birth_day' : birth_day,
            }
        );

        console.log(lastID);

    }

    update(id, student_data){

    }
    
    delete(){
        console.log("....");

        throw new ("La methode new doit être redefinir dans les sous classes");
        

    }


    find(){
        console.log("console");

        throw new ("La methode new doit être redefinir dans les sous classes");
        

    }

    findAll(){
        console.log("tout");

        throw new ("La methode new doit être redefinir dans les sous classes");


    }

}