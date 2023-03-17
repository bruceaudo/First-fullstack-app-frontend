import React from 'react';
import SideElement from './SideElement';


const Sidebar = () => {
    
    return <div className='w-1/4 fixed px-10 py-5 cursor-pointer border-r border-r-gray-600 h-screen'>
        <SideElement />
    </div>
}
export default Sidebar;