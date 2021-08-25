import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChats.css';

function SidebarChats() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Aawez Khan</h2>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default SidebarChats
