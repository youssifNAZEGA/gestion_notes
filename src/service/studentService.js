import Database from "../config/database.js";
import uuid from "../generateur.js";
import StudentRepository from "../repository/studentRepository.js";
export default class StudentService {
    
    studntes=[
        {
            'id':1000,
            'firstname':'NAZEGA',
            'lastname':'Youssif',
            'sexe':'M',
            'birth_day':'01/01/2003'}
    ];
    uuidGen;
    //repository;
    studentRepository;
    constructor(){
        this.uuidGen = uuid(1000);
        //this.repository = new Repository();
        this.studentRepository = new StudentRepository();

    }


    async getAll(){
        const db = await Database.getDatabaseInstance();
        return await db.connection.all('SELECT * FROM students');
         
    }

    async get(id){

        const db =await Database.getDatabaseInstance();
        return await db.connection.get(
            "SELECT * FROM students WHERE id = :student_id;",
            {
                ":student_id": id
            }
        );

       //return this.studntes.find((student) =>student.id == id);
    }

    async create(student_data){

        /*
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
        */
       this.studentRepository.save(student_data);
       
        

    }


    async update(id,student_data){
        const db = await Database.getDatabaseInstance();
        const {firstname, lastname, sexe, birth_day} = student_data
        
        const update_sql=`
            UPDATE students
            SET firstname = :firstname,
                lastname = :lastname,
                sexe = :sexe,
                birth_day = :birth_day,
            WHERE id = :student_id
        `;
        const response = await db.connection.run(update_sql,{
            ':firstname' : firstname,
            ':lastname' : lastname,
            ':sexe' : sexe,
            ':birth_day' : birth_day,
            ':student_id' : id


        });
        return this.get(response);

        /*
        const student = this.get(id);
        if(student !== undefined){
            student.firstname = student_data.firstname;
            student.lastname = student_data.lastname;
            student.sexe = student_data.sexe;
            student.birth_day = student_data.birth_day;

            return student;
        }
            */
    }

    async delete(id){
        const db = await Database.getDatabaseInstance();
        return await db.connection.run(
            "delete from students where id=:student_id;",
            {
                ":student_id":id
            }
        )
        //const student = this.get(id);

    }
}