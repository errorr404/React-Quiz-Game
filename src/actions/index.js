import { ADD_NUMBER_DIFFICULTY, ADD_FETCHED_DATA, UPDATE_SCORE, UPDATE_CURRENT_QUESTION_NUMBER, RESET_STATE } from '../constant'

export const addNumberDifficulty = (num,diff) => {
    const action = {
        type: ADD_NUMBER_DIFFICULTY,
        payload: {
            numberOfQuestion:num,
            diffculty:diff
        }
    }
    return action
}

export const addFetchedData = (data) => {
    const action = {
        type:ADD_FETCHED_DATA,
        payload: {
            data
        }
    }
    return action
}

export const updateScore = () => {
    const action = {
        type: UPDATE_SCORE,
    }
    return action
}

export const updateQuestionNumber = (currNumber) => {
    const action = {
        type: UPDATE_CURRENT_QUESTION_NUMBER,
        payload: {
            currNumber
        }
    }
    return action
}

export const resetState = () => {
    const action = {
        type: RESET_STATE,
    }
    return action
}