
import {Link} from "react-router-dom";
import {useState} from 'react';
import Button from '@mui/material/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { RiProductHuntFill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false);


    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setisToggleSubmenu(!isToggleSubmenu);
    }

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab ===0  ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(0)}>
                            <span className="icon">
                                <LuLayoutDashboard />
                            </span>
                            Dashboard
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab ===1 && isToggleSubmenu === true  ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(1)}>
                            <span className="icon">
                            <RiProductHuntFill />
                            </span>
                            Products
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===1 && isToggleSubmenu === true ? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Product List</Link></li>
                            <li><Link to="#">Product View</Link></li>
                            <li><Link to="#">Product Upload</Link></li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab ===2  ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(2)}>
                            <span className="icon">
                            <FaCartArrowDown />
                            </span>
                            Orders
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab ===3  ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(3)}>
                            <span className="icon">
                            <MdOutlineMessage />
                            </span>
                            Messages
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab ===4  ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(4)}>
                            <span className="icon">
                            <IoNotificationsSharp />
                            </span>
                            Notifications
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab ===5 ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(5)}>
                            <span className="icon">
                            <IoSettingsSharp />
                            </span>
                            Setting
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                    </Link>
                </li>
                
            </ul>

            <br/>
                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant="contained"><IoLogOutOutline />Logout</Button>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;