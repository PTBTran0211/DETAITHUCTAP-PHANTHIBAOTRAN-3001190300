import React from 'react'

export default function RoomDescription({title}) {
    return (
        <div className="roomdescription">
            <div className="roomdescription__header">
                <h5>Thông tin {title}</h5>
            </div>
            <div className="roomdescription__body">
                <p><strong>{title}</strong> là nơi mà bạn có thể thanh thản nghỉ ngơi giữa một bầu không khí trong lành, tự nhiên với những làn gió biển mát lạnh quyện với hương thơm đồng nội của cây cỏ, sương sớm núi rừng.</p>
                <p>58 villa mái lá nằm rải rác trên các vách đá, lưng chừng đồi và dọc theo bãi biển. Điều đặc biệt là toàn bộ villa đều được dựng bằng gỗ, các điểm nối với nhau đều bằng mộng được chốt bằng tre theo lối kiến trúc nhà của người xưa, mái nhà được lợp bằng lá dừa mộc mạc, nguyên sơ. <strong>{title}</strong> sở hữu 6 biệt thự spa được thiết kế trên những tảng đá nước nằm cạnh những vườn cây ăn trái, vườn thảo mộc kết hợp với không gian yên tĩnh của khu nghỉ, có hồ hơi và các phòng xông hơi.</p>
                <p><strong>{title}</strong> đạt tiêu chuẩn resort 5* quốc tế và là một trong những resort đầu tiên của Việt Nam nhận được nhiều giải thưởng danh giá nhất của các hiệp hội du lịch Việt Nam và thế giới.</p>
                <p>Khu nghỉ dưỡng thực sự là một điểm đến đáng mong chờ, với phong cách kiến trúc tinh tế kết hợp kiến trúc truyền thống của Việt Nam.</p>
                <p><strong>Số lượng phòng:</strong> 54 phòng.</p>
            </div>
        </div>
    )
}
