function changeColor(event){
    document.getElementById("main").style.backgroundColor = event.value;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const items = [
    { pen: 21},
    {soda: 37},
    {backpack: 45},
    {usb: 12},
    {usb: 33},
    {soda: 12},
    {backpack: 12},
    {usb: 20 }

];

const numbersPlusTen = numbers.map((number) => number +10);

const greaterThanFive = numbers.filter((number) => number > 5);

const numberFive = numbers.find((number) => number > 5);

const indexOFFive = numbers.findIndex((number) => number == 5);

const grouped  = items.reduce((acc, item) => {
    for( let prop in item){
        if(acc.hasOwnProperty(prop)) acc[prop] += item[prop];
        else acc[prop] = item[prop];
    } 
    return acc;
}, {});

const promisedFunction = (number) => {
    return new Promise((resolve, reject) => {
        if(number>10){
          setTimeout(() =>{
            resolve(`Succes number: ${number}`);
        }, 1000);   
        } else {
            reject(`Error el numero ${number} es menor a 10`);
        }  
    });
};

promisedFunction(20)
.then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.error(error);
    })
    .finally(() => {
        console.log("finally");
    });

 //console.log(promisedFunction(50));