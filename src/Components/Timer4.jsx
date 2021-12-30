import React, { useEffect, useState } from 'react'
import { interval, Subject, takeUntil } from 'rxjs';
import Controller from './Controller';
import Display from './Display';


export default function Timer4() {
    // таймер

    const [time, setTime] = useState(0)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const stream$ = new Subject()
        interval(1000)
            .pipe(takeUntil(stream$))
            .subscribe(() => {
                if (show) {
                    setTime(time => time + 1)
                }
            })
        return () => {
            stream$.next()
            stream$.complete()
        };
    }, [show])

    return (
        <div>
            <Display time={time} />
            <Controller setShow={setShow} time={time} setTime={setTime} />
        </div>
    )
}
