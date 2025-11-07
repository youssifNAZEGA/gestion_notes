import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'node:fs/promises'
import {dirname, join} from 'node:path';

export default class Database {

    

    static url = new URL(import.meta.url);
    static parent_dir = dirname(Database.url.pathname);
    static parent =join(Database.parent_dir, '..');
    static file_path = join(Database.parent,'/db.sqlite');

    
     
    

    connection;
    static instance;
    //static db_path = "src/db.sqlite";
     constructor(){
        console.log(Database.parent);
    
    }

    static async getDatabaseInstance(){
        if(Database.instance === undefined){
            Database.instance = new Database();
            await Database.instance.openDb(Database.file_path);
        }
        return Database.instance;
    }

    async  openDb (db_path) {
        this.connection = await  open({
            filename: db_path,
            driver: sqlite3.Database
        });
        await this.initDb();
    }

    async initDb() {
        try {
            
            const ddl = await fs.readFile('src/config/ddl.sql', 'utf8');
            await this.connection.exec(ddl);
            console.log('Tables...');

            
            const dml = await fs.readFile('src/config/dml.sql', 'utf8');
            await this.connection.exec(dml);
            console.log('Données...');
        } catch (error) {
            console.error('Erreur:', error);
        }
        
        
    }
    
        
}