import {useEffect, useState} from "react"



export function PasswordGenerator(){

    const [upperLetter,setUpperLetter] = useState('')
    const [lowerLetter,setLowerLetter] = useState('')
    const [number,setNumber] = useState('')
    const [symbol,setSymbol] = useState('')
    const [randomPassword,setRandomPassword] = useState('')
    const [passwordLenght,setPasswordLenght] = useState('')
    const [lowerCaseState,setLowerCaseState] = useState(true)
    const [upperCaseState,setUpperCaseState] = useState(true)
    const [numberState,setNumberState] = useState(true)
    const [symbolState,setSymbolState] = useState(true)



    function passwordGenerator(){
        let allChars = ''
        let password = ''

        if(lowerCaseState) allChars += lowerLetter
        if(upperCaseState) allChars += upperLetter
        if(symbolState) allChars += symbol
        if(numberState) allChars += number
        
        for (let i =0; i < Number(passwordLenght);i++){
            const randomIndex = Math.floor(Math.random() * allChars.length)
            password += allChars.charAt(randomIndex)
        }
        setRandomPassword(password)
        console.log(allChars)
    }

    useEffect(() => {
        let upperLetters = "";
        let lowerLetters = "";
        let numbers = "";
        let symbols = "";
    
        for (let i = 65; i <= 90; i++) upperLetters += String.fromCharCode(i);
        for (let i = 97; i <= 122; i++) lowerLetters += String.fromCharCode(i);
        for (let i = 48; i <= 57; i++) numbers += String.fromCharCode(i);
        symbols = "!@#$%^&*()_-+={}[]|;:<>,.?/~`";
    
        setUpperLetter(upperLetters);
        setLowerLetter(lowerLetters);
        setNumber(numbers);
        setSymbol(symbols);
      }, []);

    

    return (
        <>
        
            <input type='number' value={passwordLenght} onChange={(e) => setPasswordLenght(e.target.value)}/>
            <div>
                <label>lowercase</label>
                <input type='checkbox' defaultChecked onClick={() => setLowerCaseState(!lowerCaseState)}/>
            </div>
            <div>
                <label>upperCase</label>
                <input type='checkbox' defaultChecked onClick={() => setUpperCaseState(!upperCaseState)}/>
            </div>
            <div>
                <label>symbol</label>
                <input type='checkbox' defaultChecked  onClick={() => setSymbolState(!symbolState)}/>
            </div>
            <div>
                <label>number</label>
                <input type='checkbox' defaultChecked  onClick={() => setNumberState(!numberState)}/>
            </div>
            <button onClick={passwordGenerator}>clique em mim</button>
            <p>{randomPassword}</p>
            
        </>
    )
}