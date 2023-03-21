import {FormEvent, useEffect, useState} from "react"
import { api } from "../lib/axios"

type listOfUsersProps = {
    id: string
    name: string
    password: string
}[]

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

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [listOfUsers,setListOfUsers] = useState<listOfUsersProps>([])

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

    async function signIn(event: FormEvent){
        event.preventDefault()

        await api.post('signIn',{
          name,
          password  
        })
        setName('')
        setPassword('')
    }

    useEffect(() => {
            api.get('users').then(response => {
                setListOfUsers(response.data)
                console.log(listOfUsers)
            })
    },[])

    async function deleteUser(id: string) {
        await api.delete(`userDelete/${id}`);
        setListOfUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      }
      
      async function editUser(name: string, id?: string) {
        await api.put(`editUser`, name);
        setListOfUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === id ? { ...user } : user))
        );
      }

    return (
        <>
        <form onSubmit={signIn}>
            <input value={name}  placeholder="name" type='text' onChange={(e) => setName(e.target.value)} />
            <input value={password} placeholder="password" type='password'onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign up</button>
        </form>
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
            {listOfUsers.map((user) => {
                return (<div key={user.id}>
                    <p>{user.name}</p> 
                    <button onClick={() => deleteUser(user.id)}>delete user</button>
                    <button onClick={() => editUser(user.name)}>edit user</button>
                </div>
                )
            })}
        </>
    )
}