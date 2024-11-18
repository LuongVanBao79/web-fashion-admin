
import {Link} from "react-router-dom";
import {useState} from 'react';
import Button from '@mui/material/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { RiProductHuntFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";
import { FaClipboardCheck } from "react-icons/fa";


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(null);

    const isOpenSubmenu = (index) => {
        if(activeTab === index) {
            setActiveTab(null);
        } else {
            setActiveTab(index);
        }
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
                    <Button className={`w-100 ${activeTab ===1 ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(1)}>
                            <span className="icon">
                            <FaImage />
                            </span>
                            Home Banner Slides
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===1 ? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Add Home Banner Slide</Link></li>
                            <li><Link to="#">Home Slides List</Link></li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <Button className={`w-100 ${activeTab ===2? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(2)}>
                            <span className="icon">
                            <TbCategoryFilled />
                            </span>
                            Category
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===2 ? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Category List</Link></li>
                            <li><Link to="#">Add a category</Link></li>
                            <li><Link to="#">Sub Category List</Link></li>
                            <li><Link to="#">Add a sub category</Link></li>

                        </ul>
                    </div>
                    
                </li>
                <li>
                    <Button className={`w-100 ${activeTab ===3 ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(3)}>
                            <span className="icon">
                            <RiProductHuntFill />
                            </span>
                            Products
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===3 ? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Product List</Link></li>
                            <li><Link to="#">Product Upload</Link></li>
                            <li><Link to="#">Add Product RAMS</Link></li>
                            <li><Link to="#">Add Product WEIGHT</Link></li>
                            <li><Link to="#">Add Product SIZE</Link></li>
                        </ul>
                    </div>
                    
                </li>
                
                <li>
                    <Link to='/'>
                        <Button className={`w-100 ${activeTab ===4 ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(4)}>
                            <span className="icon">
                            <FaClipboardCheck />
                            </span>
                            Orders
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab ===5 ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(5)}>
                            <span className="icon">
                            <FaImage />
                            </span>
                            Home Banners
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===5? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Banners List</Link></li>
                            <li><Link to="#">Banner Upload</Link></li>
                            
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <Button className={`w-100 ${activeTab ===6 ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(6)}>
                            <span className="icon">
                            <FaImage />
                            </span>
                            Home Side Banners
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===6 ? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Banners List</Link></li>
                            <li><Link to="#">Banner Upload</Link></li>
                            
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <Button className={`w-100 ${activeTab ===7  ? 'active' : ''}`}
                        onClick={()=>isOpenSubmenu(7)}>
                            <span className="icon">
                            <FaImage />
                            </span>
                            Home Bottom Banners
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab ===7 ? 'colapse': 'colapsed'}`}>
                        <ul className='submenu'>
                            <li><Link to="#">Banners List</Link></li>
                            <li><Link to="#">Banner Upload</Link></li>
                            
                        </ul>
                    </div>
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