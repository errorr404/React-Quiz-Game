import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { addNumberDifficulty, addFetchedData,resetState } from '../actions'
import '../startPage.css'
class StartPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            questions:"10",
            difficulty:"easy",
        }
    }
    handleQuestion = e => {
        e.preventDefault()
        const noOfQuestions = e.target.value
        this.setState({questions:noOfQuestions})
    }
    handleDifficulty = e => {
        e.preventDefault()
        const tempDiffculty = e.target.value
        this.setState({difficulty:tempDiffculty})
    }
    handleQuiz = e => {
        e.preventDefault();
        const {questions,difficulty} = this.state
        this.props.addNumberDifficulty(questions,difficulty)
        axios.get(`https://opentdb.com/api.php?amount=${questions}&category=9&difficulty=${difficulty}&type=multiple`)
            .then(res=>{
                console.log(res.data)
                if(res.data.results.length>0)
                {
                    this.props.addFetchedData(res.data.results)
                    this.props.history.push('/quiz')
                }
                else alert('some issue ')
            }).catch(err=>console.log(err))

    }
    componentDidMount(){
        this.props.resetState()
    }
    render(){
        return(
            <div className="upperBodyContainer">
                <h1>React Quiz Game</h1>
            <div className="selectorWrapper" >
               <label>
                   <span>Select the total number of questions</span>
                   </label>
                   <select value={this.state.questions} onChange = {this.handleQuestion} className="selector">
                       <option value="10">10</option>
                       <option value="20">20</option>
                       <option value="30">30</option>
                       <option value="40">40</option>
                   </select>
               
            </div>
            <div className="selectorWrapper">
            <label>
                Select the Difficulty
                </label>
                <select value={this.state.difficulty} onChange = {this.handleDifficulty} className="selector1">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
           
         </div>
         <div className="selectorWrapper">
             <button onClick={this.handleQuiz} className="button">Start Test</button>
         </div>
         </div>
        )
    }
}

export default connect(null,{addNumberDifficulty,addFetchedData,resetState})(StartPage)