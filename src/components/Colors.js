import React, {useState} from 'react'
import icon from '../img/cross.png'

const Colors = ({colors,handleChooseColor,handleDeleteColor, innerRef}) => {
    const [isHovering,setIsHovering] = useState(-1)

    return (
        <div className="palette">
            <ul ref={innerRef} className="palette__list">
                {
                    colors.map(item => (
                        <li className="palette__li"
                            key={item.id}
                            onMouseEnter={() => setIsHovering(item.id)}
                            onMouseLeave={() => setIsHovering(-1)} >
                            <div className="palette__item" style={{background:item.color}}
                                onClick={() => handleChooseColor(item.id)}/>
                            <img className={`palette__cross ${isHovering === item.id ? "" : "hidden"}`}
                                src={icon}
                                onClick={() => handleDeleteColor(item.id)}
                                alt="Крестик не найден :с"/>
                        </li>
                    ))
                }
            </ul>
        </div>     
    )
}

export default Colors