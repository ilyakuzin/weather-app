import React from 'react'

export const WeatherDay = (props) => {
    const { weather } = props

    return (
        <div className='nextDays'>
            {weather.main ?
                <p>{new Date(weather.dt_txt).getDate()}.{new Date(weather.dt_txt).getMonth()}</p> : null}
            {weather.main ?
                <p className='bold'>{Math.round(weather.main.temp - 273.15)} °C</p> : null}
        </div>
    )
}