import styled from 'styled-components';
import React from 'react';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Image from 'zero-component-library/src/components/Image';

const Header = styled.div`
  height: 60px;
  width: 100%;
  padding: 8px 0 0 32px;
  border-bottom: 1px solid ${props => props.theme.gray.base};
`;

export default ({}) => (
  <Header>
    <Row alignItems='center'>
      <Col xs={3} style={{width: '120px'}}>
        <Image width={60} naturalHeight={214} naturalWidth={500} alt='spark logo' src='./Spark.png' />
      </Col>
    </Row>
  </Header>
)