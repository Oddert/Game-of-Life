import React from 'react'

import Board from './Board'

//temp
import { connect } from 'react-redux'
import { boardNextLife } from '../actions'
const mapDispatchToProps = dispatch => ({
  boardNextLife: () => dispatch(boardNextLife())
})

class Container extends React.Component {
  render () {
    const { boardNextLife } = this.props
    return (
      <div className="Container">
        <h1>Game of Life, Redux</h1>
        <Board />
        <button onClick={boardNextLife}>Next</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Container)
