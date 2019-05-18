import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Row from 'zero-component-library/src/components/Row';
import Col from 'zero-component-library/src/components/Col';
import Text from 'zero-component-library/src/components/Text';
import Input from 'zero-component-library/src/components/Input';
import Button from 'zero-component-library/src/components/Button';
import { withRouter } from "react-router";

class Viability extends React.Component {

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
      <Row flexDirection='column' alignItems={'flex-start'}>
        <Header />
        <Row justifyContent='flex-start' flexDirection='column' style={{flexGrow: 1}}>
          <div style={{paddingBottom: '100px'}}>
            <Row pad={[64, 0, 16, 0]}>
              <Col xs={12}>
                <Text size={34} weight='medium'>Your estimated gas usage in the {}</Text>
              </Col>
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