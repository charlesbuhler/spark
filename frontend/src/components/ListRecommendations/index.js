import React, { useState } from 'react';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Text from 'zero-component-library/src/components/Text';
import Input from 'zero-component-library/src/components/Input';
import Button from 'zero-component-library/src/components/Button';
import Expandable from 'zero-component-library/src/components/Expandable';
import IconChevronDown from 'zero-component-library/src/icons/components/IconChevronDown';
import styled from 'styled-components';

const Panel = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primary.base};
  padding: 16px;
  width: 100%;
`;

export default ({recs}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{paddingBottom: '100px'}}>
      <Row pad={[64, 16, 16, 16]}>
        <Col xs={12}>
          <Text size={34} weight='medium'>Here is what we recommend.</Text>
        </Col>
      </Row>
      {
        recs.map((rec, index) => {
          return (
            <Row key={index} pad={{bottom: 16}}>
              <Col xs={8}>
                <Panel>
                  <Row key={index} pad={{bottom: 16}}>
                    <Text size={22} color='#FF9678' weight='medium'>Option {index + 1}</Text>
                  </Row>
                  <Row key={index} pad={{bottom: 16}}>
                    <Text size={18} weight='medium'>{rec.action}</Text>
                  </Row>
                  <Row pad={{bottom: 16}}>
                    <Col xs={8}>
                      <Text size={16}>{rec.recommendation}</Text>
                    </Col>
                  </Row>
                  <div style={{display: 'inline-flex', alignItems: 'center', paddingBottom: '16px'}}>
                    <Text inline style={{borderBottom: '1px dashed black'}} onClick={() => setIsOpen(!isOpen)}>Learn more</Text>
                    <IconChevronDown size={16} />
                  </div>
                  <Expandable isOpen={isOpen && index === 0}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fwwhtsdbKFc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Expandable>
                </Panel>
              </Col>
            </Row>
          )
        })
      }
    </div>
  );
} 