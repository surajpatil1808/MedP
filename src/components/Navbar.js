import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import { FaUser } from 'react-icons/fa'
import { FaPills } from 'react-icons/fa';


const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Welcome to Emedicine</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    </ul>
  </div>
  <li class="nav-item">
        <a class="nav-link" href="/login">
          {/* <i class="fas fa-user"></i> Hello Login */}
          <FaUser className="nav-icon" /> Hello,Login
        </a>
      </li>
</nav>


  )
}

export default Navbar