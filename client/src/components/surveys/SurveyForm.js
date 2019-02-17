//Survey Form
import _ from 'lodash';
import React, {Component} from 'react';
import  {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';

const FIELDS = [
  {label: 'Survey Title' , name: 'title'},
  {label: 'Subject', name: 'subject'},
  {label: 'Body', name: 'body'},
  {label: 'Recipients', name: 'recipients'}
];

class SurveyForm extends Component {
  renderFields(){
    return _.map(FIELDS, ({label,name}) => {
      return <Field key = {name}
                    component = {SurveyField}
                    type = "text"
                    label = {label}
                    name = {name} />
    })
  }

  render(){
    return (
      <div>
        <form onSubmit = {this.props.handleSubmit(values => console.log(values) )}>
          {this.renderFields()}
          <Link to ="/surveys" className = "red btn-flat left white-text">
            Cancel
            <i className = "material-icons right"> cancel </i>
          </Link>
          <button className = "green btn-flat right white-text" type = "submit">
            Continue
            <i className = "material-icons right"> done </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'You must provide a title';
  }

  if(!values.subject){
    errors.subject = 'You must provide a subject';
  }

  if(!values.body){
    errors.body = 'You must provide a body';
  }

  if(!values.recipients){
    errors.recipients = 'You must have recipients';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'

})(SurveyForm);
