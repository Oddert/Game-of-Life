import React from 'react'
import { connect } from 'react-redux'

import '../styles/Board.scss'

import Cell from '../Cell'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.createRows = this.createRows.bind(this)
  }

  createCols (r) {
    const { width } = this.props.board
    const cols = []
    for (let c=0; c<width; c++) cols.push(
      <Cell row={r} col={c} key={`board_col_${c}`} />
    )
    return cols
  }

  createRows () {
    const { height } = this.props.board
    const rows = []
    for (let r=0; r<height; r++) rows.push(
      <div
        key={`board_row_${r}`}
        className='Board__row'
      >
        { this.createCols(r) }
      </div>
    )
    return rows
  }

  render () {
    const { width, height, cellWidth, cellHeight } = this.props.board
    const style = {
      display: 'grid',
      width: `${width * cellWidth}px`,
      height: `${height * cellHeight}px`,
      gridTemplateColumns: `repeat(${width}, 1fr)`,
      gridTemplateRows: `repeat(${height}, 1fr)`
    }
    return (
      <div className="Board__container">
        <div className="Board" style={style}>
          { this.createRows() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  board: state.board
})

export default connect(mapStateToProps, null)(Board)
