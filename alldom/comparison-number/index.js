//Comparison Number || Driving Permission
//Created by fabilqis

console.log(">Driving Permission< ")

const title = document.getElementById("title")
const button = document.getElementById("button")
const output = document.getElementById("output-paragraph")

function allowedDriver(theAges) {
    if (theAges <= 18) {
        return "You not allowed to drive";
    } else if (theAges >= 60) {
        return "Contact your assistant to drive";
    } else {
        return "You can drive your car";
    }
}

const getNumbers = () => {
    const nameFirst = document.getElementById("name-first").value
    const numberSecond = document.getElementById("number-second").value


    console.log("nameFirst:", nameFirst);
    console.log("numberSecond:", numberSecond);
    const allowToDrive = allowedDriver(numberSecond);
    console.log("The message is :", allowToDrive);

    output.innerText = `Name: ${nameFirst}
    Ages: ${numberSecond}
    Message: ${allowToDrive}`

}
