import http from "node:http";
const server= http.createServer((req,res)=>{
    res.writeHead(200,{
        //'content-type':'application/json'
        'content-type':'document'
    })
    if (req.url="/etudiants") {
        console.log("la liste des etudiant");
        
    }else if (req.url="/etudiants/:id") {
        console.log("les détails d'un élève");
        
    }



    })
    /*const eleve={
        "name":"Tamba",
        "phone":"122556"
    }
    res.end(JSON.stringify(eleve));
});*/

server.listen(3000,()=>{
    console.log("Server Start ...!");
    
});