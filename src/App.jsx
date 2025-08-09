import React from 'react';
import { CiShop } from 'react-icons/ci';
import { FaBookOpenReader } from 'react-icons/fa6';
import { MdNotificationsActive } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { HiOutlineArrowsPointingIn } from 'react-icons/hi2';
import { FaClock } from 'react-icons/fa6';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdSavings } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoSettings } from 'react-icons/io5';
import { FaPerson } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
 
 
 
import './App.css';
 
function App() {
    let detailes=[
        {
            name:'Members OnSite',
            num:'48/2',
            log:<FaPerson/>
        },
        {
            name:'Unpaired InVoice',
            num:'4',
            log:<FaFileInvoice/>
        },
        {
            name:'Unread Message',
            num:'2',
            log:<FaFileInvoice/>
        },
         {
            name:'Your Tickete',
            num:'6',
            log:<IoTicket/>
        }
 
    ]
  return (
    <>
      <div id='main-div' className='bg-pink-100 min-h-screen'>
        <div id='top-nav' className='bg-amber-200 shadow-md px-4 flex justify-between items-center py-3'>
          <div className="navbar-logo text-lg font-bold">Kalkio Network</div>
          <div className="user-info flex items-center">
            <span className=''>Bob</span>
            <FaRegUserCircle size={25} />
          </div>
        </div>
 
        <div id='container' className='flex'>
          <div id='left_nav' className='bg-pink-300  shadow-md h-screen p-4 w-17'>
            <nav>
              <ul className='left-links flex flex-col gap-5'>
                <li><a href="#" className="flex items-center"><CiShop size={25}/> </a></li>
                <li><a href="#" className="flex items-center"><HiOutlineArrowsPointingIn size={25}/></a></li>
                <li><a href="#" className="flex items-center"><FaClock size={25}/></a></li>
                <li><a href="#" className="flex items-center"><MdOutlineDateRange size={25}/> </a></li>
                <li><a href="#" className="flex items-center"><MdSavings size={25}/> </a></li>
                <li><a href="#" className="flex items-center"><RiCustomerService2Fill size={25}/></a></li>
                <li><a href="#" className="flex items-center"><IoSettings size={25}/> </a></li>
              </ul>
            </nav>
          </div>
         
          <div id='board' className='bg-pink-50 flex-1 p-4'>
            <h2 className='text-lg font-bold'>Hello Bob,</h2>
            <p>This is what we've got for you today.</p>
            {/* <div>
                {
                     detailes.map(e=>{
                        return <div className='bg-red-600 h-[60px] w-[250px]'>
                            {e.name}
                            <h1>Num:{e.num}</h1>
                             <h1>Num:{e.log}</h1>
 
                           
                        </div>
 
                })
 
                }
               
            </div> */}
 
                         <button className='bg-blue-600 text-white mt-4 p-2 rounded'>+ Manage Bookings</button>
                </div>
        </div>
      </div>
    </>
  );
}
 
export default App;
