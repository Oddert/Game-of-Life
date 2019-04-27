import React from 'react'
import { connect } from 'react-redux'

import { cellToggleAlive } from '../../actions'

import '../styles/Cell.scss'

class Cell extends React.Component {
  handleClick () {
    const { board: { cells }, row, col, cellToggleAlive } = this.props
    const cell = cells && cells[row] && cells[row][col]
    const { alive } = cell
    cellToggleAlive({ row, col, alive })
  }

  handleMouseover (e) {
    if (e.buttons === 1) {
      const { paint } = this.props
      if (paint.active) {
        const { row, col, cellToggleAlive } = this.props
        const alive = !paint.mode === "create"
        cellToggleAlive({ row, col, alive })
      } else {
        this.handleClick()
      }
    }
  }

  render () {
    const { row, col, board: { cells, cellWidth, cellHeight } } = this.props
    const cell = cells && cells[row] && cells[row][col]
    return (
      <div
        className='Cell'
        style={{
          width: `${cellWidth}px`,
          height: `${cellHeight}px`,
          background: cell.alive ? '#e84c3d' : '#ecf0f1'
        }}
        onClick={this.handleClick.bind(this)}
        onMouseEnter={this.handleMouseover.bind(this)}
      >
      </div>
    )
  }
}

const mapStateToProps = state => ({
  board: state.board,
  paint: state.control.paint
})
const mapDispatchToProps = dispatch => ({
  cellToggleAlive: payload => dispatch(cellToggleAlive(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
