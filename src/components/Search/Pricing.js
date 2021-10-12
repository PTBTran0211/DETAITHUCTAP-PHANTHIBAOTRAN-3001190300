import React, { Component } from 'react'
import {GiCookingPot} from 'react-icons/gi'
export default class Pricing extends Component {

    formatPrice(value) {
        let val = (value / 1).toFixed(0).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        const {price} = this.props
        return (
            <div className="pricing">
            <div className="pricing__group">
                <div className="pricing__group--primary">
                    {this.formatPrice(price)} VNĐ
                </div>
                <div className="pricing__group--room">
                    <p>
                        <b className="limit-length">Premium Garden</b>
                    </p>
                    <span>
                        <GiCookingPot/>
                        Gồm Ăn Sáng
                    </span>
                </div>
            </div>
            </div>
        )
    }
}
