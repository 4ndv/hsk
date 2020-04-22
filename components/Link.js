import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'

const Link = ({ children, href, ...props }) => (
  <NextLink
    {...props}
    href={`${process.env.base}${href}`}
  >
    {children}
  </NextLink>
)

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  href: PropTypes.string.isRequired
}

export default Link
