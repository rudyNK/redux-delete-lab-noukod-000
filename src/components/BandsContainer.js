import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    const renderBands = this.props.bands.map((band) => {return <Band band={band} key={band.id} delete={this.props.deleteBand}/>});
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {renderBands}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
