import { FC, useCallback, useState } from "react"
import "./Status.css"

import Picker, { IEmojiData } from 'emoji-picker-react';
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StatusProps } from "./Status.types"


export const Status: FC<StatusProps> = ({ status, onDelete }) => {
    const deleteHandler = useCallback(()=>{
        onDelete?.(status.id)
    },[onDelete, status.id])

    const [chosenEmoji, setChosenEmoji] = useState<IEmojiData | null>(null);
    const[active, setActive]= useState(true)

    const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
      setChosenEmoji(emojiObject);
      setActive(!active)
    };

    const emojiViewHandler = () => {
        setActive(!active)
    }

    return (
        <>
            <div 
                key={status.id} 
                className="StatusesDashboard-Status"
            >
                {chosenEmoji ? (
                    <span onClick={emojiViewHandler}>Emoshion{chosenEmoji.emoji}</span>
                ) : (
                    <span className='StatusesDashboard-EmojiView' onClick={emojiViewHandler}>выберети эмоцию 😂</span>
                )}
                 {status.status} <FontAwesomeIcon className='StatusesDashboard-DeleteStatus' icon={faTimes} onClick={deleteHandler} />
            </div>
            <div className={active ? "StatusesDashboard-Emoji" : "StatusesDashboard-EmojiView"}>
                <Picker onEmojiClick={onEmojiClick} />
            </div>
        </>
    )
}