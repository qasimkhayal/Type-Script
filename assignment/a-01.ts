let myName: string = "Qasim";
let myAge: number = 20;
let isStudent: boolean = true;
console.log(myName,myAge,isStudent);


function greet(name: string): string {
  return "Welcome " + name;
}
console.log(greet("Mohammed"));

let colors: string[]=["blue","red","yellow","white"];
console.log(colors);

function isNumberOdd(n:number):void {
if(n%2==0)
console.log(n+" = This is not an odd number false")
else(
    console.log(n+" = This an evan number true")
    
)


}
isNumberOdd(30);
console.log("----");
isNumberOdd(61);

console.log();
let numbers=[10,10,20];
let total=0;
for(let n of numbers){
total = total + n;
}
console.log(total);
