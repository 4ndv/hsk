import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'reactstrap'
import Link from './Link'

const SiteLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <header>
              <Link href="/"><a className="logo">hsk</a></Link>
            </header>
          </Col>
        </Row>
        {children}
        <footer>
          Made by&nbsp;
          <a href="https://lynx.pink" target="_blank" rel="noopener">lynx</a>
          , 2020.
          {' '}
          <a href="https://github.com/4ndv/hsk" target="_blank" rel="noopener">Source code and issues reports.</a>
        </footer>
      </Container>
    </div>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
}

export default SiteLayout
