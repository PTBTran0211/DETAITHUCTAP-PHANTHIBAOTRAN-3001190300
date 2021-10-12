import React from 'react'
import FormSearch from '../FormSearch'

export default function HotelSearch({title}) {
    return (
        <div className="hotelsearch">
            <h1>Bảng giá {title}</h1>
            <FormSearch /> 
            <div className="hotelsearch__title">
                <div className="hotelsearch__title--main">
                    Trả góp chỉ từ <span> 988.000 VNĐ<span>VNĐ</span></span>/tháng qua thẻ tín dụng Visa, Mastercard, JCB  
                    <p>  Xem chi tiết</p>
                </div>
            </div>
        </div>
    )
}
