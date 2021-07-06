import React, { useEffect, useCallback } from 'react'
import { CirclePicker } from 'react-color'

export const ColorPicker = ({ onClose, handleComplete, innerRef, buttonRef, colorsRef }) => {

    const clickListener = useCallback(
        (e) => {
            if (!(innerRef.current).contains(e.target) && !(buttonRef.current).contains(e.target) && !(colorsRef.current).contains(e.target)) {
                    onClose?.()
            }
        },
        // eslint-disable-next-line
        [innerRef.current,buttonRef.current,colorsRef.current],
    )

    useEffect(() => {
        document.addEventListener('click', clickListener)
        return () => {
            document.removeEventListener('click', clickListener)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div ref={innerRef}>
            <CirclePicker className="palette__color-picker" color="#ffffff" onChangeComplete={(color) => handleComplete(color.hex)} />
        </div>
    )
}
