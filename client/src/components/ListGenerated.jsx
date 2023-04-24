import React from 'react'

function ListGenerated(props) {
   const listItems = props.items.map((item, i) => <li className='list' key={i}>{item}</li>);
   //  console.log("List contains", listItems)
   return <ul>{listItems}</ul>;
}

export default ListGenerated;