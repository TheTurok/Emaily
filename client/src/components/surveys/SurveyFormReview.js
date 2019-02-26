import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

import formFields from './formFields';


const SurveyFormReview = ({onReviewCancel, formValues, submitSurvey, history}) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return(
        <div key = {name} style = {{margin: '5px', borderWidth: '2px', borderStyle: 'solid', borderColor: '#cccccc'}}>
          <h5 className = "dark-grey-text" style = {{margin: '2px'}}>{label}</h5>
          <h6 style = {{margin: '2px'}}>
            {formValues[name]}
          </h6>
        </div>
    );
  });


  return(
    <div>
      <h5> Please Confirm your Entries! </h5>

        {reviewFields}

      <button
        className = "yellow darken-3 btn-flat left white-text"
        onClick = {onReviewCancel}>
        Edit
        <i className = "material-icons right"> mode_edit </i>
      </button>

      <button
        onClick = {() => submitSurvey(formValues,history)}
        className = "blue darken-3 btn-flat right white-text">
        Submit Survey
        <i className = "material-icons right"> done </i>
      </button>
    </div>
  );
}

function mapStateToProps(state){
  return{formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)( withRouter(SurveyFormReview));
