import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavItem, NavLink } from 'reactstrap'
import Link from './Link'

const MainNav = (props) => {
  const { activeLink } = props

  return (
    <Nav tabs className="mb-3">
      <NavItem>
        <NavLink active={activeLink === 'learn'}><Link href="/">Learn</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeLink === 'dictionary'}><Link href="/dictionary">Dictionary</Link></NavLink>
      </NavItem>
    </Nav>
  )
}

MainNav.propTypes = {
  activeLink: PropTypes.string.isRequired
}

export default MainNav
