//Manipulation Number
//Created by fabilqis

console.log(">Manipulation Number< ")

const title = document.getElementById("title")

const output = document.getElementById("output-paragraph")

const getNumbers = () => {
    const numberFirst = document.getElementById("number-first").value
    const numberSecond = document.getElementById("number-second").value

    console.log("numberFirst:", numberFirst);
    console.log("numberSecond:", numberSecond);

    output.innerText = `First number: ${numberFirst}
    Second number: ${numberSecond}`
}

button. addEventListener("click", getNumbers);