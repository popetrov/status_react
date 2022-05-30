import React, { FC, useState} from 'react'
import "./StatusesDashboard.css"

import {  INITIAL_STATUSES } from './StatusesDashboard.const'
import { StatusesDashboardForm } from './Form/StatusesDashboardForm'
import { Status } from '../Status/Status.types'
import { Status as StatusView } from '../Status/Status'
import { Geolocation } from '../Geolocation/Geolocation'
import { Vibration } from '../Vibration/Vibration'

export const StatusesDashboard: FC = () => {
    const[statuses, setStatuses] = useState(INITIAL_STATUSES)
    
    const deleteStatusHandler = (id: string) => {
            setStatuses(prev => prev.filter(status => status.id !== id))
    }

    const formSubmitHandle = (data: Status) => {
        setStatuses(prev => [...prev, data])
    }

    return (
        <div className='StatusesDashboard'>
            {statuses.map(status => (
                <StatusView key={status.id} status={status} onDelete={deleteStatusHandler}/>
            ))}
            <StatusesDashboardForm onSubmit={formSubmitHandle}/>
            <Geolocation/>
            <Vibration/>
        </div>
    )
}