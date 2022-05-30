import React, { FC, useCallback, useRef, useState } from 'react'

import './RegisterForm.css'

export const RegisterForm: FC = () => {
    
    const EMPTY_FORM = {
        login:'',
        password:'',
        avatar: ''
    }

    const avatarRef = useRef<HTMLInputElement>(null)

    const[form, setForm] = useState(EMPTY_FORM)

    const formClearHandle = useCallback((e) => {
        e.preventDefault()
        setForm(EMPTY_FORM)
    }, [EMPTY_FORM])

    const inputChangeHandle = useCallback((e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }, [])

    const formSubmitHandle = useCallback((e) => {
        e.preventDefault()
        console.log(form)
    }, [form])

    const avatarUploadHandle = useCallback(() => {
        const avatarInput = avatarRef.current
        console.log(avatarInput)
        console.log(avatarInput?.files)

        const file = avatarInput?.files?.[0]

        console.log(file)

        if (!file){
            return
        }

        const reader = new FileReader()

        reader.addEventListener('load', (e) => {
            console.log(e.target?.result)

            setForm(prev => ({
                ...prev,
                avatar: String(e.target?.result)
            }))
        })

        reader.readAsDataURL(file)
    }, [])

    return(
        <form className='RegisterForm' onSubmit={formSubmitHandle}>
            <div className='RegisterForm-Field'>
                <label htmlFor="avatar">Аватар</label>
                <img className='RegisterForm-Avatar' src={form.avatar} alt="" />
                <input
                    ref={avatarRef}
                    className='RegisterForm-Control' 
                    type='file'
                    id='avatar' 
                    name='avatar'
                    onChange={avatarUploadHandle}
                />
            </div>
            <div className='RegisterForm-Field'>
                <label htmlFor="login">Имя пользователя</label>
                <input
                    className='RegisterForm-Control' 
                    id='login' 
                    name='login'
                    onChange={inputChangeHandle}
                    value={form.login} 
                />
            </div>
            <div className='RegisterForm-Field'>
                <label htmlFor="password">Пароль</label>
                <input
                    className='RegisterForm-Control' 
                    id='password' 
                    name='password'
                    type='password'
                    onChange={inputChangeHandle}
                    value={form.password}
                />
            </div>
            <button className='RegisterForm-Button' type='button' onClick={formClearHandle}>Очистить форму</button>
            <button className='RegisterForm-Button' type='submit'>Отправить</button>
        </form>

    )
}