import React from 'react'
import {Col} from 'react-bootstrap'
export default function Card({image,name,description, number}) {
    return (
        <Col xs={3}>
             <div className="card" style={{ backgroundImage: `url(${image})`}}>
            <div className="card__title">
                <h3>{name}</h3>
            </div>
            <div className="card__description">
                <p>{description}<span>{number ? `${number} khách sạn` : ''}</span></p>
            </div>
        </div>
        </Col>
       
    )
}
