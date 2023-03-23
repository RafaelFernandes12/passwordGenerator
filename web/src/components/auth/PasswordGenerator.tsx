import {useEffect, useState} from "react"
import * as Dialog from '@radix-ui/react-dialog'
import * as Slider from '@radix-ui/react-slider';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function PasswordGenerator(){

    const [upperLetter,setUpperLetter] = useState('')
    const [lowerLetter,setLowerLetter] = useState('')
    const [number,setNumber] = useState('')
    const [symbol,setSymbol] = useState('')
    const [randomPassword,setRandomPassword] = useState('')
    const [passwordLength,setPasswordLength] = useState('')
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
        
        for (let i =0; i < Number(passwordLength);i++){
            const randomIndex = Math.floor(Math.random() * allChars.length)
            password += allChars.charAt(randomIndex)
        }
        setRandomPassword(password)
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
    

    function passwordGeneratorCode(){

        return (
            <div className="p-10 flex content-center items-center flex-col">
                <input 
                    className="text-center w-60 h-1/2"
                    type='range' 
                    min='0' max='50' 
                    value={passwordLength} 
                    onChange={(e) => setPasswordLength(e.target.value)}
                />
                <input 
                    className="text-center w-1/4 mx-2 bg-white rounded-lg border-gray-400 border-2 py-1"
                    type="number" 
                    min="0" 
                    max="50" 
                    value={passwordLength} 
                    onChange={(e) => setPasswordLength(e.target.value)}
                />
                <div className="flex flex-col justify-center items-start mt-5">
                    <div className="flex items-center">
                        <input type='checkbox' defaultChecked onClick={() => setLowerCaseState(!lowerCaseState)}/>
                        <label className="ml-2">lowercase</label>
                    </div>
                    <div className="flex items-center">
                        <input type='checkbox' defaultChecked onClick={() => setUpperCaseState(!upperCaseState)}/>
                        <label className="ml-2">uppercase</label>
                    </div>
                    <div className="flex items-center">
                        <input type='checkbox' defaultChecked  onClick={() => setSymbolState(!symbolState)}/>
                        <label className="ml-2">symbol</label>
                    </div>
                    <div className="flex items-center">
                        <input type='checkbox' defaultChecked  onClick={() => setNumberState(!numberState)}/>
                        <label className="ml-2">number</label>
                    </div>
                </div>
                <div className="m-5 text-center w-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={passwordGenerator}>
                        <RefreshIcon className="text-white"/>
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => {navigator.clipboard.writeText(randomPassword)}}>
                        <ContentCopyIcon className="text-white"/>
                    </button>
                </div>
                <input className="text-center w-full bg-white rounded-lg border-gray-400 border-2 py-1" readOnly type='text' value={randomPassword}/>
            </div>

        )
    }


    return (
        <div className="text-center m-2">
            <Dialog.Root>
                <Dialog.Trigger type="button" className="p-2 bg-blue-900">
                    <ShuffleIcon className="text-white text-center"/>
                </Dialog.Trigger>
                <Dialog.Portal>
                <Dialog.Overlay className="bg-black/80 w-screen h-screen fixed inset-0"/>
                <Dialog.Content className="rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-400">
                    {passwordGeneratorCode()}
                </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
            
    )
}