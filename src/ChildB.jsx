import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
  return (
    <div>

        

        <ChildC  fullname={props.fullname}/>
    </div>
  )
}

export default ChildB