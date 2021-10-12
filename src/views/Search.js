// import React from 'react'
import Header from '../components/Header'
import { Container,Col,Row } from 'react-bootstrap'
import Heading from '../components/Heading'
import Sidebar from '../components/Search/Sidebar'
import FilterList from '../components/Search/FilterList'
import HotelList from '../components/Search/HotelList'
import Footer from '../components/Footer'


import React, { Component } from 'react'
import {searchHotel} from '../actions/actionsCreator'
import { connect } from 'react-redux'

class Landing extends Component {
    componentDidMount() {

        const { query } = this.props.match.params
        this.props.searchHotel(query)

    }


    render() {
        const {hotels} = this.props
        return (
            <>
              <Header />
                <Container>
                    <Heading title="Tìm Kiếm Khách Sạn" />
                    <Row>
                    <Col xs={12} lg={3}>
                        <Sidebar />
                        <FilterList />
                    </Col>
                    <Col xs={12} lg={9}>
                        <HotelList hotels={ hotels }/>
                    </Col>
                    </Row>
                    
                </Container>
              <Footer />      
            </>
        )
    }
}
const mapStateToProps = state => ({
    hotels: state.hotels.hotels

})


export default connect(mapStateToProps, { searchHotel })(Landing)