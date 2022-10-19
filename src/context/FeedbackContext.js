
import { createContext, useState } from "react";


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {id:1, text:"This is feedback item 1", rating: 10},
        {id:2, text:"This is feedback item 2", rating: 5},
        {id:3, text:"This is feedback item 3", rating: 3},
    
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, 
        edit: false
    })

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = new Date().getTime().toString()
        setFeedback([...feedback,newFeedback]);
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            let myFilter = feedback.filter((item) => item.id !== id);
            setFeedback(myFilter);
        }
    }

//    Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
        console.log(feedbackEdit);
        // console.log(feedbackEdit);
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) =>  item.id === id ? {...item, ...updItem} : item))
    }
    
    return(
        <FeedbackContext.Provider value={{
            feedback, 
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;