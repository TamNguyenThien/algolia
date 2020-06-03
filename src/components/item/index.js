import React, { useState } from 'react'
import Home from '../Home'
import { Link } from 'react-router-dom'
export default function Item (props) {
  const { Items } = props
  console.log(Items, 'data1')
  const { point } = Items
  const [showDetail, setShowDetail] = useState(false)
  const handleShow = () => {
    setShowDetail(true)
  }
  return (
    <>
      {Items.map(i => (
        <div key={i.id} style={{ backgroundColor: '#f9f9f9', margin: '5px 40px' }}>
          <h3 key={i.id} style={{ display: 'block' }} onClick={handleShow}>
            <Link to={`/item/${i.point}`}>{i.title}</Link>
          </h3>
          <div style={{ float: 'left', marginRight: 10 }}>{i.point} point   | </div>
          <div style={{ float: 'left', marginRight: 10 }}>{i.author}  |</div>
          <div style={{ float: 'left', marginRight: 10 }}>{i.time} ago |</div>
          <div>{i.comments} comments</div>
        </div>
      ))}
    </>
  )
}
