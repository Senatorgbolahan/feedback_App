import React, {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    // calculate rating avg
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length

average = average.toFixed(1)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length}</h4>
        <h4>Average rating : {isNaN(average)  ? 0 : average}</h4>
    </div>
  )
}

/*import PropTypes from 'prop-types'
FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
*/


export default FeedbackStats