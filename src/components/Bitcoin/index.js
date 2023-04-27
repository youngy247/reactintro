import {useEffect, useState} from "react";


const Bitcoin = () => {
    const [price, setPrice] = useState(0)

    // useEffect(() => {
    //     const fetchData = () => {
    //         fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
    //             .then(res => res.json())
    //             .then(data => {
    //                 setPrice(data.bpi.GBP.rate)
    //             })
    //     }
    //     fetchData()
    //     // const intervalId = setInterval(fetchData, 3000);
    //     //
    //     // return () => clearInterval(intervalId);
    // }, [])



   const fetchData = () => {
       fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
           .then(res => res.json())
           .then(data => {
               setPrice(data.bpi.GBP.rate)
           }).catch((error) => {
           console.log(error);
       });
   }

    useEffect(() => {
        fetchData()
        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);
}, [])

        return (
            <div>
                <p>
                    The current Bitcoin price in GBP is: <strong>{price}</strong>
                </p>
            </div>
        )
}

export default Bitcoin