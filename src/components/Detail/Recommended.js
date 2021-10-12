import React from 'react'

export default function Recommended({title}) {
    return (
        <div className="recommended">
            <div className="recommended__header">
                <h4>Trải nghiệm phải thử ở {title}</h4>
            </div>
            <div className="recommended__description">
                <div className="recommended__description--1">
                    <p>Nếu như Nha Trang được vinh danh là một trong 29 vịnh đẹp nhất thế giới thì <strong>{title}</strong> chính là nơi mang vẻ đẹp thuần khiết nhất trên vịnh. Bầu không khí trong vắt, yên bình không một chút xô bồ rộn rã, nơi đây là kết quả của sự giao hòa giữa thiên nhiên và con người trong những ngôi villa với vật liệu chủ đạo là gỗ, mây tre, tranh lá vấn vương mùi thảo mộc.</p>
                </div>
                <div className="recommended__description--1">
                    <p>-&nbsp;Hệ thống spa cao cấp tại {title} đã được được tờ báo nổi tiếng của Anh <strong>Huffingtonpost</strong> bình chọn vào “<strong>Top 10 điểm đến tuyệt vời nhất để điều trị spa trên thế giới</strong>” với phương pháp trị liệu bằng thảo mộc để tái tạo năng lượng, làm đẹp cho làn da và khiến tinh thần thoải mái hơn</p>
                </div>
                <div className="recommended__description--1">
                    <p>-&nbsp;<strong>Floating Breakfast </strong>- bữa sáng tại hồ bơi riêng của mỗi Villa, được đặt trên chiếc thuyền gỗ nổi trên mặt nước. Hòa cũng thiên nhiên tươi đẹp cùng ánh bình minh nơi đây. Sẽ cho quý khách khá nhiều bức ảnh đẹp mắt và một trải nghiệm hoàn toàn thú vị.</p>
                </div>
            </div>
            <div className="recommended__more">
                <p> Xem Chi Tiết </p>
            </div>
        </div>
    )
}
