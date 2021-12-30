import React from 'react'

export default function Display({time}) {
    return (
        <div>
            {('0' + Math.floor(time / (60 * 60))).slice(-2) + ' : '}
            {('0' + Math.floor(time / 60) % 60).slice(-2) + ' : '}
            {('0' + Math.floor(time % 60)).slice(-2)}
        </div>
    )
}
