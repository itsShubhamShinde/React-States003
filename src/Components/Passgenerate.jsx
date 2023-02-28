import React from 'react'
import './Passgenerate.css'
// import {MdFileCopy} from 'react-icons/md'

const Passgenerate = (props) => {
    const numbers = "0123456789";
    const UppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const LowercaseLetter = "abcdefghijklmnopqrstuvwxyz"
    const Specialchar = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"

    const generatepass = (e) => {
        let charlist = ""
        if (props.Uppercase) {
            charlist = charlist + UppercaseLetter;
        }
        if (props.Lowercase) {
            charlist = charlist + LowercaseLetter;
        }
        if (props.Number) {
            charlist = charlist + numbers;
        }
        if (props.Symbol) {
            charlist = charlist + Specialchar;
        }
        props.setPassword(createpass(charlist))
    }

    const createpass = (charlist) => {
        let pass = ""
        for (let i = 0; i < props.Length; i++) {
            const randomvalue = Math.round(Math.random() * charlist.length)
            pass = pass + charlist.charAt(randomvalue)
        }
        return pass
    }

    return (
        <div className="passwordcontainer">
            <div className="heading">
                <h1>Password Generator</h1>
            </div>

            <div className="inputcontainer">
                <input type="text" value={props.Password} placeholder='Display'/>
                <button onClick={() => {
                    if (props.Password.length > 0) {
                        navigator.clipboard.writeText(props.Password)
                        props.setCopied(true)
                        setInterval(() => {
                            props.setCopied(false)
                        }, 3000)
                    }
                }}>
                    {props.Copied ? "Copied" : <i style={{color: "white", fontSize:"1.5rem"}} class="fa fa-clipboard" aria-hidden="true"></i>}
                </button>
            </div>



            <div className="lengthcontainer">
                <label htmlFor="passlength"> Select password length</label>
                <input defaultValue={props.Length} type="number" max="15" min="6" onChange={(e) => {
                    props.setLength(e.target.value)
                }} />
            </div>



            <div className="checkboxcontainer">
                <input checked={props.Uppercase} type="checkbox" onChange={(e) => {
                    props.setUppercase(e.target.checked)
                }} />
                <label htmlFor="uppercase">Include Uppercase letters</label>
            </div>
            <div className="checkboxcontainer">
                <input checked={props.Lowercase} type="checkbox" onChange={(e) => {
                    props.setLowercase(e.target.checked)
                }} />
                <label htmlFor="uppercase">Include Lowercase letters</label>
            </div>
            <div className="checkboxcontainer">
                <input checked={props.Number} type="checkbox" onChange={(e) => {
                    props.setNumber(e.target.checked)
                }} />
                <label htmlFor="uppercase">Include numbers </label>
            </div>
            <div className="checkboxcontainer">
                <input checked={props.Symbol} type="checkbox" onChange={(e) => {
                    props.setSymbol(e.target.checked)
                }} />
                <label htmlFor="uppercase">Include symbols</label>
            </div>

            <div className="generatebtn">
                <button onClick={generatepass}>Generate Password</button>
            </div>
        </div>
    )
}

export default Passgenerate;