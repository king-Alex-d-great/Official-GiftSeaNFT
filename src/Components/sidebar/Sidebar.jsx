import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import logo from '../../img/logo.png';
import styled, {keyframes} from 'styled-components'
import {fadeInDown} from 'react-animations';
import { Link, useLocation } from 'react-router-dom'
import sidebarNav from '../../configs/sidebarNav'

const BounceDown = styled.div`
animation: 2s ${keyframes`${fadeInDown}`}`;

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
                <BounceDown>
            <div className="sidebar__logo">
                <img src={logo} alt=''/>
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item" style={{marginTop: '70px'}}>
                    <div className="sidebar__menu__item__icon">
                        <i style={{color: '#FF4646'}} className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt" style={{color: '#FF4646'}}>
                        Logout
                    </div>
                </div>
            </div>
            </BounceDown>
        </div>
    )
}

export default Sidebar
