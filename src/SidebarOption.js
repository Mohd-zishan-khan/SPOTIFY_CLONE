import React from 'react'
import "./SidebarOption.css";

function SidebarOption({ title="test", Icon }) {
    return (
        <div className='sidebarOption'>
            {Icon&&<Icon className="sidebarOption__icons" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}


        </div>
    )
}

export default SidebarOption