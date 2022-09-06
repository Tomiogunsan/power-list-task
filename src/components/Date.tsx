import classes from './Date.module.css';
import {GiHornedHelm } from 'react-icons/gi'


const Heading = () => {
    const date: Date = new Date()
        console.log(date)
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday']
        const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return(
        <div>
            <h1><GiHornedHelm /> Powerlist</h1>

            <div className={classes.date}>
                <p>{days[date.getDay()]}</p>
                <p>{date.getDate()}</p>
                <p>{months[date.getMonth()]}</p>
                <p>{date.getFullYear()}</p>
            </div>
        </div>
    )
}

export default Heading