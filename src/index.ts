let First_name:string="virat"
let age:number=23;

type isFetching={
     condition:boolean
}

//array of number
let arr:number[]=[1,2,3,4,5];

let arrofstring:string[]=["virat","kholi"];

//tupels
let tuples:[string,boolean]=["virat",true]

//enum
 enum group{ 
    User,
    SuperUser,
    Admin,
    SuperAdmin,
};


function product(x:number,y:number){
    return x*y;
}
console.log(product(7,5))

function divide(x:number,y:number){
    return Math.floor(x/y)
}


const printName=({First_name}):void=>{
    console.log(`${First_name}`)
}