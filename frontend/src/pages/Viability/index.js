import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Text from 'zero-component-library/src/components/Text';
import Input from 'zero-component-library/src/components/Input';
import Button from 'zero-component-library/src/components/Button';
import { withRouter } from "react-router";
import queryString from 'query-string'

class Viability extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isSelected: null,
    };
  }

  handleSubmit = () => {
    const { history } = this.props;
    history.push('appliance-1');
  }

  componentDidMount() {
    const {
      location
    } = this.props;

    const params = queryString.parse(location.search);

    this.setState({
      ...params
    })
  }

  render() {
    const {
      percentile,
      therms,
    } = this.state;

    console.log('percentile', percentile);

    const {
      isSelected
    } = this.state;

    return (
      <Row flexDirection='column' alignItems={'flex-start'}>
        <Header />
        <Row justifyContent='flex-start' flexDirection='column' style={{flexGrow: 1}}>
          <div style={{paddingBottom: '100px'}}>
            <Row justifyContent='center' pad={[64, 0, 32, 0]}>
              <Col xs={7}>
                <Text size={34} align='center' weight='medium'>Your estimated gas usage is <Text weight={'medium'} size={34} inline color='#FF9678'>{therms} therms</Text> which puts you in the <Text weight={'medium'} size={34} inline color='#FF9678'>{percentile}th</Text> percentile of energy usage!</Text>
              </Col>
            </Row>
            <Row justifyContent='center'>
              <Col xs={8} pad={8}>
                <Text size={22} align='center'>We might be able to help.</Text>
              </Col>
            </Row>
            <Row justifyContent='center'>
                <Button onClick={this.handleSubmit}>Let's Find Out</Button>
            </Row>
          </div>
        </Row>
      </Row>
    );
  }
}

Viability.propTypes = {

};

export default withRouter(Viability);