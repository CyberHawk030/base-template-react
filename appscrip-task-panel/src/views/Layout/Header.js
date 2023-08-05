import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    className='tw-text-white'
  >
    <i className='bi bi-list tw-text-white tw-text-lg' />
  </div>
  ));
  
  return (
    <nav className="tw-bg-slate-900 tw-flex tw-justify-between tw-items-center px-3 tw-py-1.5">
      <div className="tw-text-white">
        <h3 className="tw-m-0 tw-font-light tw-font-roboto">Customer Management</h3>
      </div>
      <div className="md:tw-flex tw-hidden tw-gap-x-2 tw-items-center tw-font-roboto">
        <button onClick={() => navigate('/signout')} className="header-btn">
          Sign out
        </button>
      </div>
      <div className='md:tw-hidden tw-font-roboto'>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle}>
            Click
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate('/signout')}>Sign out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header
