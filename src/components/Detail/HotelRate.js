import React from 'react'
import HotelRoom from './HotelRoom'


export default function HotelRate() {
    return (
        <div className="hotelrate">
            <table className="table hotelrate__table">
                <thead>
                    <tr>
                        <th>Loại Phòng</th>
                        <th>Các lựa chọn</th>
                        <th>Tổng tiền </th>
                        <th>Giữ phòng</th>
                    </tr>
                </thead>
                <tbody>
                    <HotelRoom />
                    <HotelRoom />
                    <HotelRoom />
                    <HotelRoom />

                </tbody>
            </table>
        </div>
    )
}
