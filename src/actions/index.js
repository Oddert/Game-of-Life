import types from './types'

export const cellToggleAlive = payload => ({
  type: types.CELL_TOGGLE_ALIVE,
  payload
})


export const boardNextLife = () => ({
  type: types.BOARD_NEXT_LIFE
})
