import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav class='navbar navbar-light bg-light'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          Navbar{' '}
          <span className='bagge badge-pill badge-secondary'>
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
