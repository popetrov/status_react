import { FC } from 'react'
import './User.css'

import user from './User.svg'

export type UserProps = {
    userName?: string
}

const DEFAULT_USER = "Guest"

export const User: FC<UserProps> = ({userName = DEFAULT_USER}) => {
    return(
        <div className="User">
            {
                userName !== DEFAULT_USER &&
                    <img 
                        src={user} 
                        alt="avatar" 
                        className='User-avatar'
                    />
            }
            Пользователь {userName}
        </div>
    )
}