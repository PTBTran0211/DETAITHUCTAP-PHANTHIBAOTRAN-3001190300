import React from 'react'
import { Col } from 'react-bootstrap'
export default function SuperCard({image,number,title}) {
    return (
        <Col sx={12}>
            <div className="supercardbg" style={{ backgroundImage: `url(${image})`}}>
                <div className="supercardbg__title">
                    {title}
                </div>
                <div className="supercardbg__des">
                    {number} khách sạn
                </div>
            </div>
        </Col>
      
    )
}
