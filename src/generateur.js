export default function* uuid(start_index){
    // const fruits = ["banane", "orange", "mangue","..."];
    // for (let i = 0; i < fruits.length; i++) {
    //     yield fruits[i];
        
    // }
    let i = start_index;
    while (true) {
        yield i++;
    }
    //console.log("Salut la L3...!");
    //yield "Hello";
    //console.log("Salut la L3...!");
    
}

