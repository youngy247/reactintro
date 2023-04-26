import {useEffect, useState} from "react";

const Character = () => {
    const [data, setData] = useState({})
    const [characterID, setCharacterID] = useState(1)

    const switchToVader = () => {
        setCharacterID(4)
    }

    const switchToLuke = () => {
        setCharacterID(1)
    }

    const nextCharacter = () => {
        setCharacterID(characterID + 1)
    }

    useEffect(() => {
        fetch('https://swapi.dev/api/people/' + characterID)
            .then(res => res.json())
            .then(data => {
                if (data.detail === 'Not found'){
                    setData({
                        name: 'Unknown',
                        height: 'Unknown',
                        mass: 'Unknown'
                    })
                } else {
                    setData(data)
                }
            })
    }, [characterID])

    return (
        <>

            <ul>
                <li>Name: {data.name}</li>
                <li>Height: {data.height}</li>
                <li>Mass: {data.mass}</li>
            </ul>
            <button onClick={nextCharacter}>Next character</button>
            <button onClick={switchToVader}>Show me Vader</button>
            <button onClick={switchToLuke}>Show me Luke</button>
        </>
    )
}

export default Character