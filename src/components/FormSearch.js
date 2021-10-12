import React, { Component } from 'react'
import {BiMap} from 'react-icons/bi'
import {Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class FormSearch extends Component {
    state = {
        query: '',
    }
    handleChange = e => {
        const { value } = e.target

        this.setState({ query: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        window.location.reload(false);
        console.log("a")
    }
    render() {
        const { query } = this.state
        // console.log(query)
        return (
        <>
            <form className="formsearch col-xs-12" onSubmit={this.handleSubmit}>
                <div className="formsearch__top">
                    <div className="formsearch__top--input">
                        <BiMap/>
                        <input onChange={this.handleChange} type="text" placeholder="Bạn muốn đi đâu" value={query}/>
                    </div>
                    <div className="formsearch__top--input1">
                    <input className="btn1" type="text" placeholder="13 Tháng 10" value=""/>
                    <input className="btn2" type="text" placeholder="2 người lớn , 1 trẻ em" value=""/>
                    </div>
                    <Col xs={1} className="formsearch__top--button">
                        <Link to={`/search/q=${query}`}><button>Tìm</button></Link>
                    </Col>
                </div>
                <div className="formsearch__bottom">
                </div>
            </form>   
        </>
    )}
}

