import React from 'react'
import './Sidebar.css';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChats from './SidebarChats';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <Avatar src="https://avatars.githubusercontent.com/u/40684870?s=60&v=4">

                    </Avatar>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new Chat" type="text"></input>
                </div>
            </div>

        <div className="sidebar__chats">
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        </div>

        </div>
    )
}

export default Sidebar
