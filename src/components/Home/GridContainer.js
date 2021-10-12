import React from 'react'
import {Container} from 'react-bootstrap'
import SuperCard from './SuperCard'
import SuperCardBg from './SuperCardBg'
import Heading from '../Heading'

export default function GridContainer() {
    return (
        <Container >
         <Heading title="Điểm đến yêu thích trong nước" description="Lên rừng xuống biển. Trọn vẹn Việt Nam"/>
        <div className="grid__container grid__container--popular">
            <div className="grid__item grid__item--1">
                <SuperCard title="Phú Quốc" image="https://cdn1.ivivu.com/iVivu/2021/07/08/09/phu-quoc-755x190.jpg" number="223"/>
            </div>
            <div className="grid__item grid__item--2">
                <SuperCardBg title="Nha Trang" image="https://cdn1.ivivu.com/iVivu/2021/07/08/10/vinh-ninh-van-370x395.jpg" number="119"/>
            </div>
            <div className="grid__item grid__item--3">
                <SuperCard title="Sapa" image="https://cdn1.ivivu.com/iVivu/2021/07/08/10/sapa-370x190.jpg" number="56"/>
            </div>
            <div className="grid__item grid__item--4">
                <SuperCard title="Hòa Bình" image="	https://cdn1.ivivu.com/iVivu/2021/07/08/10/mai-chau-370x190.jpg" number="12"/>
            </div>
            <div className="grid__item grid__item--5">
                <SuperCard title="Ninh Bình" image="	https://cdn1.ivivu.com/iVivu/2021/07/08/10/ninh-binh-370x190.jpg" number="101"/>
            </div>
            <div className="grid__item grid__item--6">
                <SuperCardBg title="Vũng Tàu" image="https://cdn1.ivivu.com/iVivu/2021/07/08/10/con-dao-370x395.png" number="27"/>
            </div>
            <div className="grid__item grid__item--7">
                <SuperCard title="Vịnh Hạ Long" image="https://cdn1.ivivu.com/iVivu/2021/07/08/09/yen-tu-755x190.jpg" number="17"/>
            </div>
            <div className="grid__item grid__item--8">
                <SuperCard title="Thanh Hóa" image="https://cdn1.ivivu.com/iVivu/2021/07/08/10/sam-son-370x190.jpg" number="131"/>
            </div>
        </div>
        </Container>
        
    )
}
