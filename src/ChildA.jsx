import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
  return (
    <div>
   
    <ChildB  fullname={props.fullname}/>

    </div>
  )
}

export default ChildA