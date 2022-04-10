import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <FaIcons.FaRegNewspaper />,
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaShoppingCart />,
  },
  {
    title: 'Team',
    path: '/',
    icon: <FaIcons.FaUserFriends />,
  },
  {
    title: 'Messages',
    path: '/reports',
    icon: <FaIcons.FaEnvelope />,
  },
  {
    title: 'Support',
    path: '/products',
    icon: <FaIcons.FaCat />,
  },
]