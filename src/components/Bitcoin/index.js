import {useEffect, useState} from "react";


const Bitcoin = () => {
    const [price, setPrice] = useState(0)


useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
        .then(res => res.json())
        .then(data => {
            setPrice(data.bpi.GBP.rate)
        })
}, [])


        return (
            <div>
                <p>
                    The current Bitcoin price in GBP is: {price}
                </p>
            </div>
        )
}

export default Bitcoin