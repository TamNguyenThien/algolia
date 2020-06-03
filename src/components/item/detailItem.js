import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ItemsContext } from '../../context'
export default class DetailItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      point: this.props.match.params.point,
    }
  }
  static contextType = ItemsContext
  render () {
    const {getItem} = this.context
    const item = getItem(this.state.point)
    if(!item){
      return <div className='error'>
        <h3>No such memories could be found...</h3>
        <Link to='/' className='btn-primary'>
          Back to home
        </Link>
      </div>
    }
    const { title, point, author, comments, time} = item
    return (
      <>
        <div style={{ margin: '5px 40px' }}>
          <h3 style={{ textAlign: 'center', display: 'block' }}>
            {title}
          </h3>
          <div style={{ marginRight: 10 }}>point: {point}    </div>
          <div style={{ marginRight: 10 }}>author: {author} </div>
          <div style={{ marginRight: 10 }}>time: {time} ago</div>
          <div>comments: {comments} </div>
        </div>
      </>
    )
  }
}
