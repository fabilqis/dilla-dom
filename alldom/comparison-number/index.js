//Comparison Number || Driving Permission
//Created by fabilqis

console.log(">Driving Permission< ")

const title = document.getElementById("title")

const output = document.getElementById("output-paragraph")

const getNumbers = () => {
    const nameFirst = document.getElementById("name-first").value


    const numberSecond = document.getElementById("number-second").value

    console.log("nameFirst:", nameFirst);
    console.log("numberSecond:", numberSecond);


    output.innerText = `
    Name: ${nameFirst}
    Ages: ${numberSecond}`

}