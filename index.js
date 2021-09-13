import http from 'http'
import dotenv from 'dotenv'


//Reading values from the .env files into process.env
dotenv.config()


// Printing out an exapmle of value stored in .env
console.log("API_KEY is" +process.env.API_KEY);

function requestHandler(request,response){
    console.log("Request received, making random number");
    const randomNumber=Math.round(Math.random() * 888);
    response.end(process.env.API_KEY + "------" +randomNumber.toString())

}

const myServer= http.createServer(requestHandler)

myServer.listen(process.env.API_KEY )