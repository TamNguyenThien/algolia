import React, { useState } from 'react'
// import Navbar from './components/narbar'
import Items from './mockdata/items'
import Item from './components/item'
import Search from './components/search'
import download from './images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import './App.scss'
import { Route, Switch, Link } from 'react-router-dom'
import DetailItem from './components/item/detailItem'

export default function App () {
  const [valueSearch, setValueSearch] = useState('')
  console.log(Items, 'data')

  const [data, setData] = useState(Items)
  const handleSearch = (search) => {
    let sourceArr = Items
    let newArr = []
    if (search.length <= 0) {
      newArr = sourceArr
    } else {
      search.toLowerCase()
      for (let item of sourceArr) {
        if (item.title.toLowerCase().indexOf(search) > -1) {
          newArr.push(item)
        }
      }
    }
    setData(newArr)
    setValueSearch(search)
  }

  return (
    <div style={{margin: '-10px -10px'}}>
      {/* <Navbar /> */}
      <nav className='navbar'>
        <div className='nav-title'>
          <div className='nav-logo'>
            <Link to='/'><p className='nav-title-logo'>H</p></Link>
          </div>
          <div className='nav-search'>
            <Search valueSearch={valueSearch} handleSearch={handleSearch} />
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
      <div style={{ display: 'flex', margin: '10px 10px' }}>
        <div style={{ marginRight: 10 }}>Search</div>
        <select name='cars' id='cars' style={{marginRight: 10}}>
          <option value='Stories'>Stories</option>
          <option value='saab'>Saab</option>
          <option value='audi'>Audi</option>
        </select>
        <div style={{ marginRight: 10 }}>By</div>
        <select name='cars' id='cars' style={{marginRight: 10}}>
          <option value='Popularity'>Popularity</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
        </select>
        <div style={{ marginRight: 10 }}>For</div>
        <select name='cars' id='cars'>
          <option value='All'>All</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select>
      </div>
      <Switch>
        <Route exact path='/' component={() => <Item Items={data} />} />
        <Route exact path='/LayoutAlgolia' component={() => <Item Items={data} />} />
        <Route exact path='/item/:point' component={DetailItem} />
      </Switch>
      {/* <Item Items={data} /> */}
    </div>
  )
}
