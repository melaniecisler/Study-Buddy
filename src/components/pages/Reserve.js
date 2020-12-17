import React, { Component } from 'react';

import Form from 'react-input';
import './Reserve.css';

const INITIAL_STATE = {
  email: null,
  name: null,
  topic: null,
  date: null,
  time: null
  
};

class Reserve extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  render() {
    return (
      
      <div>
        <div>Email: {this.state.email}</div>
        <div>Name: {this.state.name}</div>
        <div>Topic: {this.state.topic}</div>
        <div>Date: {this.state.date}</div>
        <div>Time: {this.state.time}</div>
        <hr />
        <Form
          fields={[
            {
              name: 'Email',
              key: 'email',
              type: 'email',
              placeholder: 'Enter an email'
            },
            {
              name: 'Name',
              key: 'name',
              type: 'text',
              placeholder: 'Enter a name'
            },
            {
              name: 'Topic',
              key: 'topic',
              type: 'text',
              placeholder: 'Enter a topic'
            },
            {
              name: 'Date',
              key: 'date',
              type: 'text',
              placeholder: 'Enter a date'
            },
            {
              name: 'Time',
              key: 'time',
              type: 'text',
              placeholder: 'Enter a time'
            }
          ]}
          labels={false}
          onSubmit={({ email, name, topic, date, time }) => this.setState({
            email,
            name,
            topic,
            date,
            time

          })}
          
        />
        
      </div>
    );
  }
}


export default Reserve;
