import { useState } from "react"
import styles from "./Input.module.css"

export function InputContainer(props) {

    const [inputText, setInputText] = useState("")
    // handle enter press here 

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            // 13 enter key 
            props.ele(inputText)
            setInputText("")
        }
    }


    return (
        <div className={styles.inputContainer}>

            <input type="text"
                className={styles.inputToDo}
                value={inputText}
                placeholder="Enter text"
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
                onKeyDown={handleEnter}
            />
            <button className={styles.btn} onClick={() => {
                props.ele(inputText)
                setInputText("")
                console.log(inputText)
            }}>+</button>

        </div>
    )

}