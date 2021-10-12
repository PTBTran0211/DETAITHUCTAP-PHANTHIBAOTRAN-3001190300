import React from 'react'
import { Col } from 'react-bootstrap'
import {BsFillCircleFill} from 'react-icons/bs'
export default function RoomFacility({title}) {
    return (
        <Col xs={12} className="roomfacility">
            <div className="roomfacility__header">
                <h5>Tiện ích của { title} </h5>
            </div>
            <div className="roomfacility__body">
                <Col xs={12} sm={6} md={4} lg={4} className="roomfacility__body--item">
                    <BsFillCircleFill/>
                    Dịch vụ giữ hành lý
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="roomfacility__body--item">
                    <BsFillCircleFill/>
                    Phòng tập thể dục
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="roomfacility__body--item">
                    <BsFillCircleFill/>
                    Đưa đón sân bay miễn phí
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="roomfacility__body--item">
                    <BsFillCircleFill/>
                    Khu nghỉ dưỡng (Resort) 
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="roomfacility__body--item">
                    <BsFillCircleFill/>
                    Bar/Club/Pub    
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className="roomfacility__body--item">
                    <BsFillCircleFill/>
                    Trà/Cà phê miễn phí
                </Col>
            </div>
        </Col>
    )
}
