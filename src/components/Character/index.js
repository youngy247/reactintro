import {useEffect, useState} from "react";

const Character = () => {
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')

    useEffect(() => {
        fetch('https://swapi.dev/api/people/1/')
            .then(res => res.json())
            .then(data => {
                setName(data.name)
                setHeight(data.height)
                setMass(data.mass)
            })

    }, [])
    return (
        <ul>
            <li>Name: {name}</li>
            <li>Height: {height}</li>
            <li>Mass: {mass}</li>
        </ul>
    )

}
export default Character