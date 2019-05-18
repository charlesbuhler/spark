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

const client = axios.create({
  withCredentials: true,
  headers: {
    'Authorization': 'Bearer charles',
  },
});

class HomeOne extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: {
        CITY: '',
        SOLAR_Boolean: null,
        BEDROOMS: 0,
        GARAGE: null,
        HEAT_AIR_COND: null,
        TOTAL_AREA: null,
        DECADE_BUILT: null,
      }
    };
  }

  handleChange = (event) => {
    const { onChange } = this.props;

    onChange({ event, value: event.currentTarget.value });
  };

  handleOnNext = () => {
    const { history } = this.props;
    history.push('home-2');
  }

  componentDidMount() {

    fetch('http://localhost:8080/retrofit-viability', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        "test": "test"
      }),
    }).then(result => {
      console.log(result)
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    const {
      form
    } = this.state;


    return (
      <Row flexDirection='column' alignItems={'flex-start'}>
        <Header />
        <Row justifyContent='flex-start' flexDirection='column' style={{flexGrow: 1, overflow: 'scroll'}}>
          <div style={{paddingBottom: '100px'}}>
            <Row pad={[64, 0, 16, 0]}>
              <Col xs={12}>
                <Text size={34} weight='medium'>Tell us about your home?</Text>
              </Col>
            </Row>
            <Row pad={{bottom: 32}}>
              <Col xs={12}>
                <Text size={18}>This will help us estimate your energy load.</Text>
              </Col>
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
                <Input label='City' placeholder='What city do you live in?' onChange={()=> {}} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
                <Input label='Square Footage' placeholder='What is the square footage of your home?' onChange={()=> {}} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
              <Input label='Bedrooms' placeholder='How many bedrooms is your home?' onChange={()=> {}} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
              <Input label='Square Footage' placeholder='How many square feet is your home?' onChange={()=> {}} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
                <Input label='Home Age' placeholder='When was your home built?' onChange={()=> {}} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 8}}>
                <Text>Do you have a solar system?</Text>
            </Row>
            <Row>
                <Button onClick={() => this.select('SOLAR_Boolean', true)} style={{marginRight: '16px'}} secondary={!form['SOLAR_Boolean']} color={!form['SOLAR_Boolean'] ? 'gray.dark' : 'warmAccent.base'}>Gas</Button>
                <Button onClick={() => this.select('SOLAR_Boolean', false)} secondary={!form['SOLAR_Boolean']} color={!form['SOLAR_Boolean'] ? 'gray.dark' : 'warmAccent.base'}>Electric</Button>
            </Row>
          </div>
        </Row>
      </Row>
    );
  }
}

HomeOne.propTypes = {

};

export default withRouter(HomeOne);