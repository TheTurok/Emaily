// SURVEY NEW shows SurveyForm and Review

import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = { new: true };
  // }

  /* EQUIVALENT */

  state = {formReview: false};

  renderContent(){
    if(this.state.formReview){
      return <SurveyFormReview onReviewCancel={()=> this.setState({formReview: false})}/>
    }

    return <SurveyForm onSurveySubmit={()=> this.setState({formReview: true})}/>;
  }

  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
