const Button = () => {

    let clickCount = 0
    const handleClick = () => {

        clickCount++
        console.log(clickCount)
    }

    return (
        <button onClick={handleClick}>Click me!</button>
    )
}

export default Button