import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import logo from '../../img/logo.png';
import { Link, useLocation, useNavigate} from 'react-router-dom'
import sidebarNav from '../../configs/sidebarNav'


const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        const curPath = window.location.pathname.split('/userdashboard')[1]
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

    const logOut = () => {
        debugger
        localStorage.clear();
        sessionStorage.clear();
        navigate('/', { replace: true });
        // window.location.reload();
      };

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt=''/>
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item" style={{marginTop: '70px'}} onClick={logOut}>
                    <div className="sidebar__menu__item__icon">
                        <i style={{color: '#FF4646'}} className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt" style={{color: '#FF4646'}}>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
