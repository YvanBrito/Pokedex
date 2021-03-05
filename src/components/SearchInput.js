import React from 'react'

function SearchInput() {
  return (
    <div className="searchInput">
      <input type="text" name="name" placeholder="Search..." />
      <button><i class="fa fa-search"></i></button>
    </div>
  )
}

export default SearchInput
