import React from 'react'; 

const Greetings = (props) => {
    let word = ""
    switch (props.lang) {
        case "de":
            word="Hallo"
            break;
        case "en":
            word="Hello"
            break;
        case "es":
            word="Hola"
            break;
        case "fr":
            word="Bonjour"
            break;
        default:
            word="Hello"
            break;
    }


    return (
        <p>{word}, {props.name}</p>
    )
}


export default Greetings; 