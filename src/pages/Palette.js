import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteColor, addColor, changeColor, chooseColor } from '../redux/actionCreators'
import Colors from '../components/Colors'
import { ColorPicker } from '../components/ColorPicker'

const Palette = () => {
    const ref = useRef(null)
    const buttonRef = useRef(null)
    const colorsRef = useRef(null)
    const [isColorPickerVisible,setIsColorPickerVisible] = useState(false)
    const dispatch = useDispatch()
    const colors = useSelector(state => state.colors)

    const handleDeleteColor = (id) => {
        dispatch(deleteColor(id))
    }

    const handleAddColor = (id) => {
        dispatch(addColor(id))
        setIsColorPickerVisible(true)
    }

    const handleChangeColor = (color) => {
        dispatch(changeColor(color))
        setIsColorPickerVisible(false)
    }

    const handleChooseColor = (id) => {
        dispatch(chooseColor(id))
        setIsColorPickerVisible(true)
    }

    return (
        <div>
            <Colors innerRef={colorsRef} colors={colors} handleChooseColor={handleChooseColor} handleDeleteColor={handleDeleteColor} />
            <button ref={buttonRef} className="palette__button" onClick={() => handleAddColor(colors.length > 0 ? colors[colors.length-1].id+1 : 1)}>Добавить цвет</button>
            {
                isColorPickerVisible && <ColorPicker colorsRef={colorsRef} buttonRef={buttonRef} innerRef={ref} handleComplete={handleChangeColor} onClose={() => setIsColorPickerVisible(false)} />
            }
        </div>     
    )
}

export default Palette
