
import axios from 'axios'
import { buildWeatherUrl } from '../config'


const WEATHER_DAYS_INTERVAL = 5

const searchLocation = (event, location, setLocation, setData) => {
    const url = buildWeatherUrl(location, WEATHER_DAYS_INTERVAL)
        axios.get(url).then((response) => {
            const newData = {
                ...response.data,
                list: Object.values(response.data.list.reduce((acc, el) => {
                    const dateSplit = el.dt_txt.split(' ')
                    const date = dateSplit[0]
                    const time = dateSplit[1]

                    if(time.startsWith('12')) {
                        acc[date] = acc[date] ?? el
                    }
                    return acc
                }, {})),
            }
            setData(newData)
            console.log(newData)
        })
        setLocation(location)
    }

export default searchLocation
