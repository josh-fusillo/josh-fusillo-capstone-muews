import React from 'react'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'



export const SidebarData = [
    {
        title: 'Search',
        path: '/',
        icon: <SiIcons.SiElasticsearch />,
        cName: 'nav-text',
        
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <IoIcons.IoIosHome />,
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'History',
        path: '/history',
        icon: <IoIcons.IoIosLogIn />,
        cName: 'nav-text'
    },
   
]
 