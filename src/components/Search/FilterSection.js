import React, { Component } from 'react'

export default class FilterSection extends Component {
    render() {
        const { title, items } = this.props
        return (
            <div className="filtersection">
            <div className="filtersection__menu">
                <span>{title}</span>
            </div>
            <div className="filtersection__items">
                {items.map((item) => (
                    <div className="filtersection__items--item">
                        <input type="checkbox"/>
                        <label for="1"><span >{item}</span></label>
                    </div>
                ))}
            </div>
        </div>
        )
    }
}
