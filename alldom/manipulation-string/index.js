//Manipulation String || 
//Created by fabilqis

console.log(">Manipulation String< ")

const title = document.getElementById("title")
const button = document.getElementById("button")
const output = document.getElementById("output-paragraph")

const getStrings = () => {
    const fatherFirst = document.getElementById("text-first-father").value
    const fatherSecond = document.getElementById("text-second-father").value
    const momFirst = document.getElementById("text-first-mother").value
    const momSecond = document.getElementById("text-second-mother").value

    const suggest1 = `${fatherFirst} ${momFirst}`
    const suggest2 = `${fatherSecond} ${momSecond}`
    const suggest3 = `${fatherFirst}  ${momSecond}`
    const suggest4 = `${fatherSecond}  ${momFirst}`

    console.log("First suggestion:", suggest1);
    console.log("Second suggestion:", suggest2);
    console.log("Third suggestion:", suggest3);
    console.log("Fourth suggestion:", suggest4);

    output.innerText = `First Suggestion: ${suggest1}
    Second Suggestion: ${suggest2}
    Third Suggestion: ${suggest3}
    Fourth Suggestion: ${suggest4}
    `

}