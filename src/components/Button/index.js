import {useEffect, useState} from "react";

const Button = () => {

    const [counter, setCounter] = useState(0)

     const handleClick = () => {
         setCounter(counter + 1)
    }

    useEffect(() => {
        console.log(counter)
    }, [counter])

    return (
        <>
        <button onClick={handleClick}>Click me</button>
        <p>I have been clicked {counter} time(s)</p>
        </>
    )
}

export default Button