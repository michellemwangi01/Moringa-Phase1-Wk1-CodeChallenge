const speedLimit = 70
let demeritPoint = 0
let driverSpeed = prompt("Enter the driver's speed: ")

function speedDetector(speed){
    if(speed <= speedLimit){
    console.log("Ok")
}else if(speed > speedLimit){
    let overSpeedLimit = driverSpeed - speedLimit
    demeritPoint =  Math.floor(overSpeedLimit / 5)
    console.log(`Points: ${demeritPoint}`)
    if(demeritPoint > 12){
        console.log("License suspended")
    }
}
}
speedDetector(driverSpeed)
