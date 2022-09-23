
interface Object1{
    title:string,
    status:boolean,
    id:number
}
//2
type object2={
    firstname:"virat", 
    lastname:"kholi",
}

const  getName=({firstname,lastname}:object2):void=>{
let fullname=firstname+lastname;
if(!lastname)
{
    fullname=firstname
 console.log(fullname)
}
else{
    console.log(fullname)
}
}

//3
interface Address{
    houseNumber:number,
street:string,
city:string,
state:string,
postalCode:number,
country:string
}

//4
interface PersonDetails {
     phone:Array<number>;
     addresses :Array<string>
     firstname:string,
     lastname:string,
     middlename :string,

}

//5
type PersonDetailsObj=[
    {
       myname:"vk" 
    }
]
let arr:string[]
const PhoneBook=(PersonDetailsObj ):void=>{
arr.push(PersonDetailsObj)
}

