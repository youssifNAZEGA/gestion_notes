

import http from "node:http";
import StudentController from "./controller/StudentController.js";
import dotenv from 'dotenv';
import {HTTP_STATUS_CODE} from "./constants/httpStatus.js";
import Database from "./config/database.js";

dotenv.config();
//const db_path = "/home/youssif/Documents/S5/NodeJs/gestion_notes/src/db.sqlite";

const db = await Database.getDatabaseInstance();
console.log(db);

const studentController=new StudentController();
const server= http.createServer((req,res)=>{
    const method=req.method;
    const url=new URL(req.url,`http://${req.headers.host}`);
   //console.log(url);
    
    
    const endpoint=method+":"+url.pathname;
    res.setHeader("content-Type","application/json");

    //console.log(method);
    //console.log(endpoint);
    switch (endpoint) {
        case "GET:/students":
            studentController.read(req,res);
            break;
        case "GET:/student":
            studentController.get(req,res);
            res.end;
            break;
        case "POST:/students":
            studentController.create(req,res);
            
            break;
        case "PUT:/student":
            studentController.update(req,res);
            break;
        case "DELETE:/student":
            studentController.delete(req, res);
            break;
        default:
            res.writeHead(HTTP_STATUS_CODE.NOT_FOUND);
            res.end(JSON.stringify({"message":"Page not Found !"}));
            break;
    }
    
})  
//console.log(process.env.PORT);

server.listen(process.env.PORT || 3000,()=>{
    console.log("Server Start ...!");
    
});