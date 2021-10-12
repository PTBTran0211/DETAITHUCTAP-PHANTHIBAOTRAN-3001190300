import React from 'react'
import { Col } from 'react-bootstrap'
export default function SuperCard({image,number,title}) {
    return (
        <Col sx={12}>
            <div className="supercard" style={{ backgroundImage: `url(${image})`}}>
                <div className="supercard__title">
                    {title}
                </div>
                <div className="supercard__des">
                    <p>{number} khách sạn</p>
                </div>
            </div>
        </Col>
      
    )
}
