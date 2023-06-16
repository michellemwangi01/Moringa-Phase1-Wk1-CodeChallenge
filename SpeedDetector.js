//Write a program that takes as input the speed of a car e.g 80. 
//If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

//Declare and initialize the global variables 
const speedLimit = 70
let demeritPoint = 0

//Prompt the user to enter the driver's speed, accept the input and store it in a variable
let driverSpeed = prompt("Enter the driver's speed: ")


//Define a function that checks the driver's speed. 
function speedDetector(speed){
    if(speed <= speedLimit){//Prints ok if the speed is below speed limit
    console.log("Ok")
}else if(speed > speedLimit){//if speed is above speed limit
    let overSpeedLimit = driverSpeed - speedLimit //calculates by how much the speed limit has been exceeded
    demeritPoint =  Math.floor(overSpeedLimit / 5) //calculates how many demerit points to assign depending on the overspeed limit, divides the value by 5 to get the number of points to be assigned to driver
    console.log(`Points: ${demeritPoint}`)//prints the points
    if(demeritPoint > 12){//checks if the points are greater than 12, if they are, prints suspended message
        console.log("License suspended")
    }
}
}
speedDetector(driverSpeed)//call the speedDetector function and pass the driver's speed as an argument
