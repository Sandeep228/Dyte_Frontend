import React from 'react'
import { Link } from 'react-router-dom'
import QueryFilter from './QueryFilter'

const QueryInterface = () => {
  return (
    <div>
      <div>
        <h1>Query Ingestor Page</h1>
      </div>
      <div>
        <Link to='/'>
          <button>Switch to Log Ingestor Page</button>
        </Link>
      </div>
        <div><h3>Add Description to filters</h3></div>
        {/* <QueryFilter/> */}
    </div>
  )
}

export default QueryInterface