import { createStore } from 'redux'
import { paletteReducer } from './paletteReducer'

export const store = createStore(paletteReducer)