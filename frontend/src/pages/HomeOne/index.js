import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from '../../components/Header';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Text from 'zero-component-library/src/components/Text';
import Input from 'zero-component-library/src/components/Input';

const client = axios.create({
  withCredentials: true,
  headers: {
    'Authorization': 'Bearer charles',
  },
});

class HomeOne extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const { onChange } = this.props;

    onChange({ event, value: event.currentTarget.value });
  };

  componentDidMount() {
    client.get('https://us-central1-decent-ellipse-241015.cloudfunctions.net/start-retrofit').then(result =>{
      console.log('success', result)
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    const {

    } = this.props;


    return (
      <Row flexDirection='column' alignItems={'flex-start'} style={{height: '100vh'}}>
        <Header />
        <Row justifyContent='flex-start' flexDirection='column' style={{flexGrow: 1}}>
          <Row>
            <Col xs={12}>
              <Text size={34} weight='medium' align='center'>What is your address?</Text>
            </Col>
          </Row>
          <Row justifyContent='center'>
            <Col xs={4}>
              <Input placeholder='address' onChange={()=> {}} />
            </Col>
          </Row>
        </Row>
        {/* <Row justifyContent='center'>
          <Col xs={3}>
            <Text size={22} align='center'>This will help us identify rebates in your area.</Text>
          </Col>
        </Row> */}
      </Row>
    );
  }
}

HomeOne.propTypes = {

};

export default HomeOne;