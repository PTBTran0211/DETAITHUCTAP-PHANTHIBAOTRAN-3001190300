import React from 'react'
import { Container } from 'react-bootstrap'
import Card from '../Card'
import Heading from '../Heading'
export default function ListCard() {
    return (
        <div className="listcard">
            <Container>
                <Heading title="Du lịch an toàn" description="Nâng cao sức khỏe, cân bằng cuộc sống"/>
                <div className="listcard__card">
                    <Card image="https://cdn1.ivivu.com/iVivu/2021/10/09/11/mood-1-4.png" name="Lãng Mạn" description="Đi khắp thế gian, yêu thương ngập tràn - " number="12" />
                    <Card image="https://cdn1.ivivu.com/iVivu/2021/10/09/11/ban-than.jpg" name="Tận Hưởng" description="Bàn thân à dù sau này chúng ta già - " number="24" />
                    <Card image="https://cdn1.ivivu.com/iVivu/2021/10/09/11/linhhoat.png" name="Linh Hoạt" description="Hoàn hủy linh hoạt đặt không nghĩ ngợi - " number="17" />
                    <Card image="https://cdn1.ivivu.com/images/2020/11/04/10/hop_qua.png" name="Gift Voucher" description="Lưu giữ khoảnh khắc, trải nghiệm hành trình"  />
                </div> 
            </Container>
        </div>
    )
}
