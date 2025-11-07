export default class Repository {
    constructor(){
        if (new.target === Repository) {
            throw new Error("Erreur vous ne pourrier pas instancier directement la classe repository");
            //console.log(new.target);
            
            
        }
        
    }

    save(objet){
        throw new ("La methode new doit être redefinir dans les sous classes");
        
    }

    update(id, object){
        throw new ("La methode new doit être redefinir dans les sous classes");
        
    }


    delete(){
        throw new ("La methode new doit être redefinir dans les sous classes");

    }


    find(){
        throw new ("La methode new doit être redefinir dans les sous classes");

    }

    findAll(){
        throw new ("La methode new doit être redefinir dans les sous classes");

    }
}