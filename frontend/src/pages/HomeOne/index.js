import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
      alert(e);
    })
  }

  render() {
    const {

    } = this.props;


    return (
      <div>
        hey
      </div>
    );
  }
}

HomeOne.propTypes = {

};

export default HomeOne;