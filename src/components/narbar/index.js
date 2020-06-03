import React from 'react'
import './navbar.scss'
import download from '../../images/logo.svg'
// import { NavLink, BrowserRouter } from 'react-router-dom'
import { FaAlignRight, FaBeer } from 'react-icons/fa'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Search from '../search'
// const { Search } = Input

export default function Navbar () {
  return (
    <nav className='navbar'>
      <div className='nav-title'>
        <div className='nav-logo'>
          {/* <img src={download} alt='Beach Resort' /> */}
          <p className='nav-title-logo'>H</p>
        </div>
        <div className='nav-search'>
          <Search />
          {/* <input id='search' type='text' prefix={<FaAlignRight />} /> */}
          {/* <Input id='search' placeholder='large size' prefix={<UserOutlined />} /> */}
          {/* <Search id='search1' placeholder="input search text" onSearch={value => console.log(value)} enterButton /> */}
        </div>
        <div className='nav-right'>
          <p>By</p>
          <img src={download} alt='Beach Resort' />
          <button type='button' className='nav-btn' >
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
      </div>

    </nav>
  )
}
