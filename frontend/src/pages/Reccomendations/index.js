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


class Reccomendations extends React.Component {
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
              hey
          </div>
        </Row>
      </Row>
    );
  }
}

Reccomendations.propTypes = {

};

export default withRouter(Reccomendations);