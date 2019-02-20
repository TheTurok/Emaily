//Survey Form
import _ from 'lodash';
import React, {Component} from 'react';
import  {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {label: 'Survey Title' , name: 'title'},
  {label: 'Subject', name: 'subject'},
  {label: 'Body', name: 'body'},
  {label: 'Recipients', name: 'recipient'}
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
        <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  errors.recipient = validateEmails(values.recipient || '');

  _.each(FIELDS, ({name}) => {
    if(!values[name]){
      errors[name] = 'You must provide a ' + name;
    }
  });



  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'

})(SurveyForm);
