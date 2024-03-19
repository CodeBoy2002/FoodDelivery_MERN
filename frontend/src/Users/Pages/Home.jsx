import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>
        <Link to='/create'>
          <p>Order Food</p>
        </Link>
      </nav>
    </div>
  )
}

export default Home