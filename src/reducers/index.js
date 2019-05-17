import { ADD_NUMBER_DIFFICULTY,ADD_FETCHED_DATA, UPDATE_SCORE, UPDATE_CURRENT_QUESTION_NUMBER, RESET_STATE } from '../constant'

const quiz = ( state = {score:0,started:false,currentQuestionNumber:1},action) => {
    switch(action.type) {
        case ADD_NUMBER_DIFFICULTY:
            var tempState = {...state}
            const {numberOfQuestion,diffculty} = action.payload
            tempState.numberOfQuestion = numberOfQuestion
            tempState.diffculty = diffculty
            console.log('state is--->',tempState)
            return tempState
        
        case ADD_FETCHED_DATA:
            tempState = {...state}
            const { data } = action.payload
            tempState.data = data
            tempState.started = true
            console.log('state here -->',tempState)
            return tempState
        
        case UPDATE_SCORE:
            tempState = {...state}
            tempState.score += 1
            return tempState

        case UPDATE_CURRENT_QUESTION_NUMBER:
            tempState = {...state}
            tempState.currentQuestionNumber = action.payload.currNumber
            return tempState
        case RESET_STATE:
            tempState = {score:0,started:false,currentQuestionNumber:1}
            return tempState
            
        default:
        return state
    }
}

export default quiz;