import React from 'react'
import Book from './Book'
import Condition from './Condition'
import ConditionBottom from './ConditionBottom'

import Rate from './Rate'
import Room from './Room'
export default function HotelRoom() {
    return (
        <>
        <tr>
            <Room />
            <Condition/>
            <Rate />
            <Book />
        </tr>
        <tr>
            <ConditionBottom/>
            <Rate />
            <Book />
        </tr>  
        </>
    )
}
