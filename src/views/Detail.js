import React, { Component } from 'react'
import Breadcrumbs from '../components/Detail/Breadcrumbs'
import Header from '../components/Header'
import {Container } from 'react-bootstrap'
import HotelDetail from '../components/Detail/HotelDetail'
import Footer from '../components/Footer';
import { connect } from 'react-redux'
import {showHotel} from '../actions/actionsCreator'

class Detail extends Component {
    componentDidMount() {
        //take ID (from global state, where we'd put Student's data with reducer):
        const { id } = this.props.match.params
        this.props.showHotel(id)
    }
    render() {
        const { hotel } = this.props
        // console.log(this.props.hotel)
  
        return (

            <>
            <Header />
            <Container>
                <Breadcrumbs  name="Khu nghỉ dưỡng Six Senses Ninh Vân Bay Nha Trang"/>

                <HotelDetail info={ hotel }/>
            </Container>
            <Footer />
        </>
        )
    }
}
//State (which is a copy of the DB, not the DB itself!):
const mapStateToProps = state => ({
    hotel: state.hotels.hotel

})


export default connect(mapStateToProps, { showHotel })(Detail)
