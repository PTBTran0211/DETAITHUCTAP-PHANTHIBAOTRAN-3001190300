import React from 'react'
import { Container} from 'react-bootstrap'
import Banner from './Banner'
import Heading from '../Heading'
export default function CarouselBar() {
    return (
        <div className="carouselbar">
        <Container>
            <Heading title="Ưu đãi tốt nhất hôm nay" description="Nhanh tay đặt ngay. Để mai sẽ lỡ."/>
            <div className="carouselbar__card">
                <Banner />
            </div> 
        </Container>
    </div>
    )
}
