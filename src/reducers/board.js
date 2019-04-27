import types from '../actions/types'
import initialState from '../constants/initialState'

const board = (state = initialState.board, action) => {
  const { payload } = action
  switch (action.type) {
    case types.CELL_TOGGLE_ALIVE:
      const cellToggleAlive__cells = [...state.cells]
      cellToggleAlive__cells[payload.row][payload.col].alive = !payload.alive
      return Object.assign({}, state, {
        cells: cellToggleAlive__cells
      })

    case types.BOARD_NEXT_LIFE:
      const boardNextLife__cells_image = JSON.parse(JSON.stringify([...state.cells]))
      const boardNextLife__cells_new = JSON.parse(JSON.stringify([...state.cells]))

      const boardNextLife__cells_out = boardNextLife__cells_new.map(row => {
        let newRow = row.map(cell => {

          let tracker = 0

          for (let chRow = cell.row - 1; chRow < cell.row + 2; chRow ++) {
            for (let chCol = cell.col - 1; chCol < cell.col + 2; chCol ++) {
              if (!(chRow === cell.row && chCol === cell.col)) {
                let checkCell = boardNextLife__cells_image && boardNextLife__cells_image[chRow] && boardNextLife__cells_image[chRow][chCol]
                if (checkCell && checkCell.alive) tracker++
              }
            }
          }

          const life = (neigbours, alive) => alive
            ? neigbours > 1 && neigbours < 4 ? true : false
            : neigbours === 3 ? true : false

          return {
            row: cell.row,
            col: cell.col,
            alive: life(tracker, cell.alive)
          }

        })
        return newRow
      })
      return Object.assign({}, state, {
        cells: boardNextLife__cells_out
      })

    default:
      return state
  }
}

export default board
