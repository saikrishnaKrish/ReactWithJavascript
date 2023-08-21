import React, { useState } from 'react'
import InputComponent from '../../components/inputComponent'

const FeebckFrmControlledCmpnt = () => {
  const feedbackFormInit={
        feedbackTitle:"",
        category:"",
        feedbackDetail:""
  }

const [feedbckFrmObj,setFeedbckFrm]=useState(feedbackFormInit);

  const handleFeedbackForm=(e)=>{
    console.log(e.target.name)
    console.log(e.target.value)
  }
  
  return (
    <div>
        <div>Feedback Form</div>
       <form>
            <InputComponent 
            label="Feedback Title"
            name="feedbackTitle"
            value={feedbckFrmObj.feedbackTitle}
            onChange={(e)=>handleFeedbackForm(e)} />
       </form>
    </div>
  )
}

export default FeebckFrmControlledCmpnt