import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from '../../components/Header';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Text from 'zero-component-library/src/components/Text';
import Input from 'zero-component-library/src/components/Input';
import Button from 'zero-component-library/src/components/Button';
import { withRouter } from "react-router";


class HomeTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const { onChange } = this.props;

    onChange({ event, value: event.currentTarget.value });
  };

  handleOnNext = () => {
    const { history } = this.props;
    history.push('appliance-1');
  }

  componentDidMount() {
    
  }

  render() {
    const {

    } = this.props;


    return (
      <Row flexDirection='column' alignItems={'flex-start'} style={{height: '100vh'}}>
        <Header />
        <Row justifyContent='flex-start' flexDirection='column' style={{flexGrow: 1}}>
          <div style={{paddingBottom: '100px'}}>
            <Row pad={[64, 0, 16, 0]}>
              <Col xs={12}>
                <Text size={34} weight='medium'>How many rooms in are in your home?</Text>
              </Col>
            </Row>
            <Row pad={{bottom: 42}}>
              <Col xs={12}>
                <Text size={22} align='center'>This will help us calculate your energy load.</Text>
              </Col>
            </Row>
            <Row justifyContent='center' pad={{bottom: 50}}>
              <Col xs={4}>
                <Input placeholder='Number of rooms' onChange={()=> {}} />
              </Col>
            </Row>
            <Row justifyContent='center'>
              <Button onClick={this.handleOnNext} secondary color='warmAccent.base'>Next</Button>
            </Row>
          </div>
        </Row>
      </Row>
    );
  }
}

HomeTwo.propTypes = {

};

export default withRouter(HomeTwo);