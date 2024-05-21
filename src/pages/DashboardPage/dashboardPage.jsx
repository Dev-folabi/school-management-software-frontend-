import React from 'react'
import {Outlet} from 'react-router-dom'
import SideNav from '../../component/dashboard/sidenav'


const DashboardPage = ()=>{
    return(
        <div className="flex h-dvh">
            <div className="p-8 border-r-2">
                <SideNav/>
            </div>
            <div className="flex-1 p-16">
                <Outlet/>
            </div>

        </div>
    )

}
export default DashboardPage