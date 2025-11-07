import { json } from "node:stream/consumers";
import uuid from "../generateur.js";
import StudentService from "../service/studentService.js"
export default class StudentController {
    



    studentService;
    constructor(){
        this.studentService = new StudentService();
    }



    async create(req,res){
        const {firstname,lastname,sexe,birth_day}=await json(req);
        const student = {
            'id' : null,
            'firstname': firstname !== undefined ? firstname : "",
            'lastname': lastname !== undefined ? lastname : "",
            'sexe': sexe !== undefined ? sexe : "",
            'birth_day': birth_day !== undefined ? birth_day : "",
        };

        const new_student = await this.studentService.create(student);

        res.writeHead(200);
        res.end(JSON.stringify(new_student));

        //this.studntes.push(this.studentService.create(student));
        //console.log(this.studntes);
        

        
    }
    async get(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=parseInt(url.searchParams.get("id"));


        const student = await this.studentService.get(id);
        
        if (student) {
            res.writeHead(200);
            res.end(JSON.stringify(student));
        }else{
            res.writeHead(404);
            res.end(JSON.stringify({
                "messsage":"Resource not Found !"
            }));
        }

    }
    async read(req,res){
        res.writeHead(200);
        res.end(JSON.stringify(await this.studentService.getAll()));
    }
    async update(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=parseInt(url.searchParams.get("id"));

        const {firstname,lastname,sexe,birth_day}=await json(req);
        const student = {
            'id' : null,
            'firstname': firstname !== undefined ? firstname : "",
            'lastname': lastname !== undefined ? lastname : "",
            'sexe': sexe !== undefined ? sexe : "",
            'birth_day': birth_day !== undefined ? birth_day : "",
        };

        const update_student =await this.studentService.update(id,student);
        if (update_student) {
            res.writeHead(200);
            res.end(JSON.stringify(update_student));
            return;
        
          
        }else{
            res.writeHead(404);
            res.end(JSON.stringify({
                "messsage":"Resource not Found !"
            }));
        }
        

        
    }
    async delete(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=parseInt(url.searchParams.get("id"));

        await this.studentService.delete(id);

        res.writeHead(200);
        res.end("Student saccesfully deleted");
    }
   
    
}