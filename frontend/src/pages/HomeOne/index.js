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
    
    this.
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

    fetch('https://us-central1-decent-ellipse-241015.cloudfunctions.net/start-retrofit', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    }).then(result => {
      console.log(result)
    }).catch(e => {
      console.log(e)
    })
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
                <Text size={34} weight='medium'>Tell us about you home?</Text>
              </Col>
            </Row>
            <Row pad={{bottom: 42}}>
              <Col xs={12}>
                <Text size={22} align='center'>This will help us identify rebates in your area?</Text>
              </Col>
            </Row>
            <Row justifyContent='center' pad={{bottom: 50}}>
              <Col xs={8}>
                <Input placeholder='address' onChange={()=> {}} />
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

HomeOne.propTypes = {

};

export default withRouter(HomeOne);