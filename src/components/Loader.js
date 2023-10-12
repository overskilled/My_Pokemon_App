import React from 'react';
import { Spinner, Row, Col } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-5 loader'>
        <Row>
            <Col>
                <Spinner
                    className='spinner-border spinner-border-lg spinner'
                    role='status'
                >

                </Spinner>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='mx-3'>
                    Fetching Pokemon...
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Loader
