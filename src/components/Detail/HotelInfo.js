import React from 'react'
import {Col } from 'react-bootstrap'
import {BiMap} from 'react-icons/bi'
import {BsStarFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

export default function HotelInfo({rate,title,address,recommended}) {
    return (
        <div className="hotelinfo">
            <Col xs={12} sm={8} lg={9} className="hotelinfo__left">
                <div className="hotelinfo__left--header">
                    <h1>Trải nghiệm phải thử ở {title}</h1>
                    <p className="tagheader__rate">
                        <span className="tagheader__rate--star">
                            <BsStarFill />
                            <BsStarFill />    
                            <BsStarFill />    
                            <BsStarFill />    
                            <BsStarFill />    
                        </span>
                        <AiFillHeart className="tagheader__rate--heart" />
                        <span className="tagheader__rate--location">
                            <span className="review-score">{rate}</span>
                            <span className="review-text">Tuyệt Vời</span>
                            
                            <span className="review-count"> | {recommended} đáng giá</span>
                        </span>
                    </p>
                    <p><BiMap />{address}</p>
                </div>
            </Col>
            <Col xs={12} sm={4} lg={3} className="hotelinfo__right">
                <button>Đặt Ngay</button>
            </Col>
        </div>
    )
}
