import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as TbIcons from 'react-icons/tb';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';
 

export const SidebarAdmin = [
  {
    title: 'Home',
    path: '/AdminHome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },


  {
    title: 'Activities',
    path: '/activity',
    icon: <BsIcons.BsCardList />,
    cName: 'nav-text'
  },
  {
    title: 'Profile Info',
    path: '/AdminProfile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'ViewCustomers',
    path: '/ViewCustomers',
    icon: <TbIcons.TbBrandBooking />,
    cName: 'nav-text'
  },
 
  {
    title: 'Logout',
    path: '/Logout',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  },
  /*{
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }, */
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];