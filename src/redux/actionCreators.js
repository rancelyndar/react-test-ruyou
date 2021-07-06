import { ADD_COLOR, CHANGE_COLOR, CHOOSE_COLOR, DELETE_COLOR } from "./types"

export const addColor = (id) => ({type:ADD_COLOR,payload:id})

export const changeColor = (color) => ({type:CHANGE_COLOR, payload:color})

export const deleteColor = (id) => ({type:DELETE_COLOR, payload:id})

export const chooseColor = (id) => ({type:CHOOSE_COLOR, payload:id})
