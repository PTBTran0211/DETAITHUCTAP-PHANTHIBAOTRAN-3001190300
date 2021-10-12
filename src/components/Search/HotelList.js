import React, { Component } from 'react'
import HotelItem from './HotelItem'



export default  class HotelList extends Component {
  


    render() {
        const { hotels } = this.props
        return (
            <div>
                {hotels.map((hotel) => (
                    <HotelItem key={hotel.id} info={hotel} />
                ))}
            </div>
        )
    }
}
//State (which is a copy of the DB, not the DB itself!):



