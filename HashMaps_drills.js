const HashMap = require('./hashmap');

function main(){
    const lotr = new HashMap();

    lotr.set('Hobbit','Bilbo');
    lotr.set('Hobbit','Frodo');
    lotr.set('Wizard','Gandalf');
    lotr.set('Maiar','Sauron');
    lotr.set('RingBearer','Gollum');
    lotr.set('LadyOfLight','Galadriel');
    lotr.set('HalfElven','Arwen');
    lotr.set('Ent','Treebeard');

    console.log('lotr', lotr);
    console.log(lotr.get('Maiar'));
    console.log(lotr.get('Hobbit'));

    //capacity 24
}

main();

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10); //[str1: 10]
    map1.set(str2,20); //[str2: 20]
    let map2 = new HashMap();
    let str3 = str1; //[str3 = str1]
    let str4 = str2;  //[str4 = str2]
    map2.set(str3,20); 
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
WhatDoesThisDo();

// const palindromes = function(str){
//     const palinMap = new HashMap();
//     let count = 0; 

//     //every new character - create new entry
//     for(let i = 0; i < str.length(); i++){
//         let value = palinMap.get(str[i]);
//         value++;
//         palinMap.set(str[i], value);
//     }
//     //whenever we find the character again, we update the
//     //number of occurrences appropriately
//     for(let i = 0 ; i < str.length(); i++){
//         let charOccurrences= palinMap.get(str[i]);

//         if(charOccurrences === 1){
//             count ++;
//         }
//     }
//     //if count is more than 1, palindromic permutation isn't possible
//     if(count > 1){
//         return false;
//     }
//     return true;
// }
palindromes();


