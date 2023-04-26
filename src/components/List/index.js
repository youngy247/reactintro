const List = () => {
    const items = ['Bananas', 'Peanut butter', 'Jaffa cakes', 'Bleach']

    return (
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

export default List