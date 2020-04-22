import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'reactstrap'

const SiteLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <header>
              <div className="logo">hsk</div>
            </header>
          </Col>
        </Row>
        {children}
        <footer>
          Made by&nbsp;
          <a href="https://lynx.pink" target="_blank" rel="noopener">lynx</a>
          , 2020
        </footer>
      </Container>
    </div>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
}

export default SiteLayout
