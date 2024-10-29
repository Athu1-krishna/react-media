import React from 'react'
import { Row, Col } from 'react-bootstrap'
import videoCard from './VideoCard'
import VideoCard from './VideoCard'

const View = () => {
  return (
    <div>
      <Row>
        <Col className='mb-2' sm={12} md={6} lg={4}>
        <VideoCard/>
        </Col>
      </Row>
    </div>
  )
}

export default View