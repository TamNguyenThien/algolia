import React from 'react'

export default function Search (props) {
  const { valueSearch, handleSearch } = props
  return (
    <>
      <input
        id='search'
        style={{ paddingLeft: 10 }}
        type='text'
        placeholder='search item ...'
        value={valueSearch}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </>
  )
}
