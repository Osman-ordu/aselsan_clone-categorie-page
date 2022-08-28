import React from 'react'
import HeaderIcons from './icons-area/iconsGroup'
import MemberLogin from './member-area/memberLoginArea';
import Navigation from './sticky-navigation/navigation';

const header = () => {
    return (
        <div style={{background:'#fff'}} className='header-wrapper sticky-top'>
            <HeaderIcons />
            <MemberLogin />
            <Navigation />
        </div>
    )
}

export default header