import React, { Component } from 'react'
import Pricing from './Pricing'
import TagHeader from './TagHeader'
import TagHighlight from './TagHighlight'
import { Link } from 'react-router-dom'

export default class HotelItem extends Component {
    render() {
        const { id, name, img, price, rate, recommended, address } = this.props.info
        return (
            <Link to={`/hotel/detail/${id}`}>
            <div className="hotelitem">
                
                <div className="hotelitem__left">
                    <img src={img} alt={name}/>
                </div>
                <div className="hotelitem__center">
                    <TagHeader  title={name} rate={rate} recommended={recommended} address={address}/>
                    <TagHighlight />
                </div>
                <div className="hotelitem__right">
                    <Pricing price={price} />
                </div>
            </div>
            </Link>
        )
    }
}
