import React, { useState } from 'react'

export default function Controller({ setShow, time, setTime }) {
   
    const [clicked, setClicked] = useState(false)
    const [status, setStatus] = useState(0)

    const onStart = () => { // запуск / остановка
        if (time === 0) {
            setShow(show => !show)
        } else if (status === 1) {
            setShow(show => !show)
            setStatus(0)
        }
        else {
            setShow(false)
            setTime(0)
        }
    }

    const onStop = () => { // прекратить отсчет времени
        if (time !== 0) {
            setShow(false);
            setStatus(1)
        }
    }

    const onReset = () => { // сброс секундомер на 0.  Обнуляет секундомер и снова начинает отсчет.
        setShow(true)
        setTime(0)
    }

    const dblClick = () => {
        let timeout

        if (clicked) {
            setClicked(false)
            clearTimeout(timeout)
            onStop()
            return
        }
        setClicked(true)
        timeout = setTimeout(() => {
            setClicked(false)
        }, 300)
    }
    return (
        <>
            <button className='btn' onClick={onStart}>«Start / Stop»</button>
            <button className='btn' onClick={onReset}>«Reset»</button>
            <button className='btn' onClick={dblClick} >Show State</button>
        </>
    )
}
