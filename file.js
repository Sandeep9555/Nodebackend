const fs=require("fs");

//sync
//fs.writeFileSync('./test.txt','Hey there');
//async

///fs.writeFile('./test1.txt',"hello",(err)=>{

//});
//sync
//const result=fs.readFileSync('./test.txt',"utf-8");
//console.log(result);

//async
// fs.readFile('./test.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })

//apendfile

//fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());
fs.appendFileSync('./test.txt', `${Date.now()} Hey There\n`);

fs.cpSync('./test.txt','./test1.txt')

//fs.unlinkSync('./test.txt')
console.log(fs.statSync('./test.txt'));
