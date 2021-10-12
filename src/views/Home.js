import React from 'react'
import CarouselBar from '../components/Home/CarouselBar';
import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import ListCard from '../components/Home/ListCard';
import GridContainer from '../components/Home/GridContainer';
import GridContainerSecond from '../components/Home/GridContainerSecond';
import Footer from '../components/Footer';
export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <ListCard />
            <CarouselBar/>
            <GridContainer />
            <GridContainerSecond />
            <Footer/>     
        </>
    )
}
