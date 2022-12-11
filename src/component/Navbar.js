import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-light p-2">
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-between" >
            <div className='d-flex'>
              {/* MENU BUTTON */}
              <i className="bi bi-justify margin-right-20 fs-4 mt-3"></i>
              {/* LOGO IMAGE */}
              <img src="/images/logo.png" className='mt-3 margin-right-20' alt="" height="32" />
              {/* SEARCH FIELD */}
              <form className='mt-2'>
                <div className='position-relative search-input-width'>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" defaultValue="computed tomography" />
                  <button className="btn btn-primary position-absolute top-50 end-0 translate-middle-y" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div>
              {/* SIGN IN BUTTON */}
              <ul className="navbar-nav mt-2">
                <li className="nav-item">
                  <a className='link-color' aria-current="page" href="#">Signin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar