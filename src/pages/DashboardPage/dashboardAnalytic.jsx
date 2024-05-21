import React, {useContext} from 'react'
import {AuthContext} from '../../context/userContext/authContext'

const DashboardAnalytic = ()=>{
const contextValue = useContext(AuthContext)
    return(
        <div>
            My Analytic
            {contextValue}
        </div>
    )
}
export default DashboardAnalytic