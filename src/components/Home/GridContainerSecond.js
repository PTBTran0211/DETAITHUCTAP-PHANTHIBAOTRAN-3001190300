import React from 'react'
import {Container} from 'react-bootstrap'
import SuperCard from './SuperCard'
import Heading from '../Heading'

export default function GridContainer() {
    return (
        <Container >
         <Heading title="Điểm đến yêu thích nước ngoài" description="Bao la thế giới. Bốn bể là nhà"/>
        <div className="grid__container grid__container--popular-2">
            <div className="grid__item grid__item--1">
                <SuperCard title="Potugar" image="	https://cdn1.ivivu.com/iVivu/2021/05/24/15/lisbon-portugal-gettyrf-1023284240-jpg-cr-755x190.jpg" number="2278"/>
            </div>
            <div className="grid__item">
                <SuperCard title="Switzerland" image="https://cdn1.ivivu.com/iVivu/2021/05/24/11/switzeland-cr-370x190.jpg" number="732"/>
            </div>
            <div className="grid__item">
                <SuperCard title="Spanis" image="https://cdn1.ivivu.com/iVivu/2021/05/24/11/espana-maravillosa-barri-gotic-370x190.jpg" number="10959"/>
            </div>
            <div className="grid__item ">
                <SuperCard title="Italy" image="https://cdn1.ivivu.com/iVivu/2021/05/24/11/image-1-cr-370x190.jpg" number="21084"/>
            </div>
            <div className="grid__item ">
                <SuperCard title="Greece" image="https://cdn1.ivivu.com/iVivu/2021/05/24/11/image-processing20191003-4-11zv2iu-cr-370x190.jpg" number="7427"/>
            </div>
        </div>
        </Container>
        
    )
}
