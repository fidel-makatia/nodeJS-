var fs=require('fs');

var data = require('./data.json');
console.log(data.name);

fs.readFile('./data.json','utf-8' ,(err,data)=>{
    var data=JSON.parse(data);
console.log(data.name);
});

fs.readdir('/', (err,data)=>{
    console.log(data);
});

var dataa={

    car: 'Mercedes',
    car: 'Buggatti',
    car: 'Ferrari',
    
}

fs.writeFile('dataa.json', JSON.stringify(dataa),(err)=>{});