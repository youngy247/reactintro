const Button = () => {

    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <button onClick={handleClick}>Click me!</button>
    )
}

export default Button