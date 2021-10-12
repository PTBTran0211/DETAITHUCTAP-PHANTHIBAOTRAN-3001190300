import React, { Component } from 'react'
import ReviewHotel from './ReviewHotel'
import HotelInfo from './HotelInfo'

import {Col,Row } from 'react-bootstrap'
import HotelSearch from './HotelSearch'
import HotelRate from './HotelRate'
import CarouselHotel from './CarouselHotel'
import RoomFacility from './RoomFacility'
import RoomDescription from './RoomDescription'


export default class HotelDetail extends Component {
    


    render() {
        
        const { name,rate,address,recommended,policy } = this.props.info
        console.log(policy)
        return (
            <Row className="hoteldetail">
            <Col lg={3} xs={12} className="hoteldetail__left">
                    <ReviewHotel title={name}/>
            </Col>
            
            <Col lg={9} xs={12} className="hoteldetail__right">
                    <HotelInfo  title={name}  rate={rate}  address={address}  recommended={recommended} />
                    <CarouselHotel />
                    <HotelSearch title={name} />
                    <HotelRate />
                    <RoomFacility  title={name} />
                    <RoomDescription  title={name}  />
                   
            </Col>
        </Row>
        )
    }
}


