import React from 'react';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Image from 'zero-component-library/src/components/Image';
import Text from 'zero-component-library/src/components/Text';
import Button from 'zero-component-library/src/components/Button';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Row style={{height: '400px', borderBottom: '1px solid #CCCCCC'}} flexDirection='row' justifyContent={'center'}>
        <Col xs={12}>
          <Row flexDirection='column' justifyContent={'center'}>
            <Row justifyContent={'center'}>
              <Col xs={3}>
                <Image width={500} naturalHeight={214} naturalWidth={500} alt='spark logo' src='./Spark.png' />
              </Col>
            </Row>
            <Row justifyContent={'center'}>
              <Col xs={12} pad={{top: 16}}>
                <Text weight='medium' singleLine align='center' size={42}>Electrify red Your Home</Text>
              </Col>
            </Row>
            <Row justifyContent={'center'} pad={{top: 32}}>
              <Link
                to={{
                  pathname: "/home-1",
                }}
                style={{ textDecoration: 'none' }}
              >
                <Button>Get Started</Button>
              </Link>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
