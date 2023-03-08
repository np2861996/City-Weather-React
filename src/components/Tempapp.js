import React, { useEffect, useState } from 'react'

function Tempapp() {

    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=178e409a87e48d719af3dcef6fa4aa09`;
            const response = await fetch(url)
            const jsonres = await response.json();
            setCity(jsonres.main)

        }
        fetchApi()
    }, [search])

    return (
        <>
            <div className='body-main'>
                <div className='box'>
                    <div className='inputdata'>
                        <input type='search' className='inputField' onChange={(event) => { setSearch(event.target.value) }} />
                    </div>

                </div>

                {!city ? (
                    <p className="no-found">No Data Found</p>
                ) : (

                    <div className='info'>
                        <h2 className='location' >
                            <i className="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">
                            {city.temp} °C
                        </h1>
                        <h3 className='tempmin_max'> Min :  {city.temp_min} °C | Max : {city.temp_max} °C </h3>
                    </div>)}
            </div>
        </>
    )
}

export default Tempapp
