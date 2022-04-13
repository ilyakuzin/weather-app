import React, {useState} from 'react'

import { WeatherDay } from './components/WeatherDay'
import searchLocation  from './components/updateData'




function App() {
    const [data, setData] = useState(null)
    const [location, setLocation] = useState('')
  
    return (
        <div className="app">
            <div className='search'>
                <input value={location}
                       onChange={event => setLocation(event.target.value)}
                       placeholder='Введите город'
                       type="text"/>
                       <button className='button' onClick={(event) => searchLocation(event, location, setLocation, setData)}></button>
            </div>
            {!!data && (
                <div className='container'>
                    <div className="top">
                        <div className="location">
                            <p>{data?.city.name}</p>
                            <p className=''>Сейчас</p>
                        </div>
                        <div className="temp">
                            {data.list[0].main ? <h1>{Math.round(data.list[0].main.temp - 273.15)} °C</h1> : null}
                        </div>
                        <div className='description'>
                            {data.list[0].weather[0] ? <p>{data.list[0].weather[0].main}</p> : null}
                        </div>
                    </div>
                    <div className='center'>
                        {data.list.map((weather, index) => (
                            <WeatherDay key={index} weather={weather} />
                        ))}
                    </div>
                    {data.city.name &&
                    <div className="bottom">
                        <div className='feels'>
                            <p>Ощущается как</p>
                            {data.list[0].main ?
                                <p className='bold'>{Math.round(data.list[0].main.feels_like - 273.15)} °C</p> : null}
                        </div>
                        <div className='humidity'>
                            <p>Влажность</p>
                            {data.list[0].main ? <p className='bold'>{data.list[0].main.humidity} %</p> : null}
                        </div>
                        <div className='wind'>
                            <p>Скорость ветра</p>
                            {data.list[0].wind ? <p className='bold'>{data.list[0].wind.speed} м/с</p> : null}
                        </div>
                    </div>
                    }
                </div>
            )}
        </div>
    );
}

export default App;