import React, { Component } from 'react'
import items from './mockdata/items'

const ItemsContext = React.createContext()

class ItemsProvider extends Component {
  state = {
    items: [],
    sortItems: [],
    loading: true,
    point: 0,
    time: 0
  }
  componentWillMount() {
    // let items = this.formatData(items)
    this.setState ({
      items: items
    })
  }
  // getData = async () => {
  //   let items = this.formatData(response.items)
  //   this.setState({
  //     items:items
  //   })
  // }
  getItem = (point) => {
    let tempItem = [...this.state.items]
    const item = tempItem.find(item => item.point == point)
    return item
  }
  
  // formatData(items){
  //   let tempItems = items.map(item => {
  //     item
  //     return item
  //   })
  //   return tempItems
  // }
  render () {
    return (
      <ItemsContext.Provider value={{...this.state, getItem: this.getItem}}>
        {this.props.children}
      </ItemsContext.Provider>
    )
  }
}
const ItemsConsumer = ItemsContext.Consumer

export function withItemsConsumer(Component){
  return function ConsumerWrapper(props){
    return <ItemsConsumer>
      {value => <Component {...props} context={value} />}
    </ItemsConsumer>
  }
}

export { ItemsProvider, ItemsConsumer, ItemsContext }
