import React, { Component } from 'react'
import FilterSection from './FilterSection'
import InputGroup from '../InputGroup'

// Redux
import { connect } from 'react-redux'
import { showFilter} from '../../actions/actionsCreator'

class FilterList extends Component {
    componentDidMount() {
        this.props.showFilter()
    }
    render() {
        const { filters } = this.props
        return (
            <div className="filterlist">
                <InputGroup />
                {filters.map((filter)=>(
                    <FilterSection key={filter.id} title={filter.title} items={filter.items}/>
                ))}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    filters: state.filters.filters

})


export default connect(mapStateToProps, { showFilter })(FilterList)