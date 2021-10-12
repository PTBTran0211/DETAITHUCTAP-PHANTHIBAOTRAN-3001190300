import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {BiMap} from 'react-icons/bi'

export default function TagHeader({title,rate,recommended,address}) {
    return (
        <div className="tagheader">
            <p className="tagheader__title">{title}</p>
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
                    <span className="review-score">{rate} đánh giá</span>
                    <span className="review-text">Tuyệt Vời</span>
                    
                    <span className="review-count"> | {recommended}</span>
                </span>
            </p>
            <p className="tagheader__address limit-length">
               
                <BiMap /> {address} - <b>Xem Bản Đồ</b>
            </p>
        </div>
    )
}
