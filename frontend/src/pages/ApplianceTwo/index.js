import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Text from 'zero-component-library/src/components/Text';
import Input from 'zero-component-library/src/components/Input';
import Button from 'zero-component-library/src/components/Button';
import { withRouter } from "react-router";

class ApplianceTwo extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isSelected: null,
    };
  }

  handleChange = (event) => {
    const { onChange } = this.props;

    onChange({ event, value: event.currentTarget.value });
  };

  handleOnNext = () => {
    const { history } = this.props;
    history.push('appliance-3');
  }

  chooseType = (type) => {
    console.log(type)
    this.setState({
      isSelected: type,
    });
  }


  componentDidMount() {

  }

  render() {
    const {

    } = this.props;

    const {
      isSelected
    } = this.state;

    return (
      <Row flexDirection='column' alignItems={'flex-start'} style={{height: '100vh'}}>
        <Header />
        <Row justifyContent='flex-start' flexDirection='column' style={{flexGrow: 1}}>
          <div style={{paddingBottom: '100px'}}>
            <Row pad={[64, 0, 16, 0]}>
              <Col xs={12}>
                <Text size={34} weight='medium'>Is your Oven gas or electric?</Text>
              </Col>
            </Row>
            <Row justifyContent='center' pad={{bottom: 50}}>
              <Col xs={12} pad={16}>
                <Row justifyContent='center'>
                  <Button onClick={() => this.chooseType('gas')} style={{marginRight: '16px'}} secondary={isSelected !== 'gas'} color={isSelected !== 'gas' ? 'gray.dark' : 'warmAccent.base'}>Gas</Button>
                  <Button onClick={() => this.chooseType('electric')} secondary={isSelected !== 'electric'} color={isSelected !== 'electric' ? 'gray.dark' : 'warmAccent.base'}>Electric</Button>
                </Row>
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

ApplianceTwo.propTypes = {

};

export default withRouter(ApplianceTwo);