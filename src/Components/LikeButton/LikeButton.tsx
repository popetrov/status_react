import { FC, useState } from 'react'

export const LikeButton: FC = () => {

    const [buttonState, setButtonState] = useState({
        like: 0,
        name: "User"
    })

    // const likeEmoji = buttonState.like ? '❤️' : '💔'

    const clickHandle = () => {

        setButtonState(prev =>({
            ...prev,
            like: prev.like+=1
        }))
        
    }
    
    let isClickable = buttonState.like<10

    const resetHandle = (e: React.MouseEvent) => {
        e.preventDefault()
        setButtonState(prev =>({
            ...prev,
            like: prev.like = 0 
        }))
    }

    return(
        <div>
            <button 
                className='LikeButton' 
                onClick={isClickable ? clickHandle : undefined}
            >
                <div>
                    {buttonState.like}❤️{!isClickable && "Больше лайков ставить нельзя"}
                </div>
            </button>
            <button onClick={resetHandle}>
                Сбросить лайки
                <a href="https://dvkfinance.bitrix24.ru/crm/lead/kanban/">мяу</a>
            </button>
        </div>

    )
}