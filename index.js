import http from 'http'

const server=http.createServer((req,res) =>{
    console.log(("First exercise"));

    res.write(`${Math.floor(Math.random()*20)}`);

    // const randomNumber = Math.floor(Math.random()*20)
    // const number=randomNumber.toString();
    // res.write(number);
    

    res.end(" is a random number ")
})
// console.log("And the random number is" );
server.listen(8081)