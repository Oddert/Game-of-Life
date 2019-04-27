import { combineReducers } from 'redux'

import board from './board'
import control from './control'

const rootReducer = combineReducers ({
  board
  , control
})

export default rootReducer
