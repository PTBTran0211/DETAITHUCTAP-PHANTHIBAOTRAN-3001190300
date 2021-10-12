import React from 'react'
import {Carousel } from 'react-bootstrap'
export default function Banner() {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn1.ivivu.com/iVivu/2021/07/12/17/novotel-pq-1.jpg"
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn1.ivivu.com/iVivu/2021/07/12/16/vinpearl-longbeach-nt.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn1.ivivu.com/iVivu/2021/07/12/14/fusion-camranh.jpg"
                alt="Third slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn1.ivivu.com/iVivu/2021/07/12/16/sol.jpg"
                alt="Fourth slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn1.ivivu.com/iVivu/2021/07/12/14/fusion-pq.jpg"
                alt="Fifth slide"
                />

                
            </Carousel.Item>
            </Carousel>
        </>
    )
}
