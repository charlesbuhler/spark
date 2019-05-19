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

const submitForm = (body) => {
  return fetch('http://localhost:8080/retrofit-viability', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(body),
  }).then(result => result.json());
};

class HomeOne extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: {
        CITY: '',
        SOLAR_Boolean: null,
        BEDROOMS: 0,
        GARAGE: null,
        TOTAL_AREA: null,
        DECADE_BUILT: null,
        AIR: null,
        HEAT: null,
      }
    };
  }

  handleSubmit = () => {
    const { history } = this.props;
    const { form } = this.state;

    this.setState({
      isLoading: true
    })

    submitForm(form).then(result => {
      console.log(result)
      history.push(`viability?percentile=${result.usagePercentile}&therms=${result.therms}`);
    }).catch(e => {
      console.log(e)
    }).finally(() => {
    });
  }

  handleChange = (key, value) => {
    const { form } = this.state;

    const newForm = {
      ...form,
      [key]: value,
    };
    
    this.setState({
      form: newForm
    });
  } 

  render() {
    const {
      form
    } = this.state;

    console.log(form)

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
                <Input label='City' placeholder='What city do you live in?' onChange={(e) => this.handleChange('CITY', e.target.value)} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
                <Input type='number' label='Square Footage' placeholder='What is the square footage of your home?'  onChange={(e) => this.handleChange('TOTAL_AREA', parseInt(e.target.value))} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
              <Input type='number' label='Bedrooms' placeholder='How many bedrooms is your home?'  onChange={(e) => this.handleChange('BEDROOMS', parseInt(e.target.value))} />
            </Row>
            <Row justifyContent='center' pad={{bottom: 24}}>
                <Input label='Home Age' placeholder='When was your home built?'  onChange={(e) => this.handleChange('DECADE_BUILT', e.target.value)} />
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Do you have a solar system?</Text>
            </Row>
            <Row>
                <Button onClick={() => this.handleChange('SOLAR_Boolean', true)} style={{marginRight: '16px'}} secondary color={form['SOLAR_Boolean'] === true ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('SOLAR_Boolean', false)} secondary color={form['SOLAR_Boolean'] === false ? 'warmAccent.base' : 'gray.dark'}>No</Button>
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Do you have a garage?</Text>
            </Row>
            <Row pad={{bottom: 16}}>
                <Button onClick={() => this.handleChange('GARAGE', true)} style={{marginRight: '16px'}} secondary color={form['GARAGE'] === true ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('GARAGE', false)} secondary color={form['GARAGE'] === false ? 'warmAccent.base' : 'gray.dark'}>No</Button>
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Do you have a heater?</Text>
            </Row>
            <Row pad={{bottom: 16}}>
                <Button onClick={() => this.handleChange('HEAT', true)} style={{marginRight: '16px'}} secondary color={form['HEAT'] === true ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('HEAT', false)} secondary color={form['HEAT'] === false ?  'warmAccent.base' : 'gray.dark'}>No</Button>
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Do you have air conditioning?</Text>
            </Row>
            <Row pad={{bottom: 32}}>
                <Button onClick={() => this.handleChange('AIR', true)} style={{marginRight: '16px'}} secondary color={form['AIR'] ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('AIR', false)} secondary color={form['AIR'] === false ?  'warmAccent.base' : 'gray.dark'}>No</Button>
            </Row>
            <Row justifyContent='center'>
                <Button onClick={() => this.handleSubmit()}>Submit</Button>
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