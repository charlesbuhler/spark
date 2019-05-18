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
  return fetch('http://localhost:8080/get-recommendations', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(body),
  });
};

class ApplianceOne extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      form: {
        stove: null,
        waterHeater: null,
        dryer: null,
      },
      reccomendations: [

      ]
    };
  }

  handleSubmit = () => {
    const { history } = this.props;
    const { form } = this.state;

    this.setState({
      isLoading: true
    })

    submitForm(form).then(result => {
      this.setState({
        recommendations: result
      });
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
                <Text size={34} weight='medium'>Let's learn about your appliances.</Text>
              </Col>
            </Row>
            <Row pad={{bottom: 32}}>
              <Col xs={12}>
                <Text size={18}>This will help us recommend upgrades.</Text>
              </Col>
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Is your stove gas or electric?</Text>
            </Row>
            <Row pad={{bottom: 16}}>
                <Button onClick={() => this.handleChange('stove', 'ELECTRIC')} style={{marginRight: '16px'}} secondary color={form['stove'] === 'ELECTRIC' ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('stove', 'GAS')} secondary color={form['stove'] === 'GAS' ? 'warmAccent.base' : 'gray.dark'}>No</Button>
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Is your water heater gas or electric?</Text>
            </Row>
            <Row pad={{bottom: 16}}>
                <Button onClick={() => this.handleChange('waterHeater', 'ELECTRIC')} style={{marginRight: '16px'}} secondary color={form['waterHeater'] === 'ELECTRIC' ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('waterHeater', 'GAS')} secondary color={form['waterHeater'] === 'GAS' ?  'warmAccent.base' : 'gray.dark'}>No</Button>
            </Row>
            <Row justifyContent='flex-start' pad={{bottom: 8}}>
                <Text>Is your dryer gas or electric?</Text>
            </Row>
            <Row pad={{bottom: 32}}>
                <Button onClick={() => this.handleChange('dryer', 'ELECTRIC')} style={{marginRight: '16px'}} secondary color={form['dryer'] === 'ELECTRIC' ? 'warmAccent.base' : 'gray.dark'}>Yes</Button>
                <Button onClick={() => this.handleChange('dryer', 'GAS')} secondary color={form['dryer'] === 'GAS' ?  'warmAccent.base' : 'gray.dark'}>No</Button>
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

ApplianceOne.propTypes = {

};

export default withRouter(ApplianceOne);