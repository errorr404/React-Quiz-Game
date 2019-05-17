import React from 'react'
import { connect } from 'react-redux'
import {Modal, Button} from 'react-bootstrap'
import { updateScore,updateQuestionNumber } from '../actions'
import Header from './Header'
import '../question.css'
class Question extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentQuestion:0,
            score:0,
            show:false,
            correct:false,
        }
    }
    handleCheckAns = que => {
        const question = [...this.props.copyState.data]
        let {currentQuestion} = this.state
        if(currentQuestion===this.props.copyState.numberOfQuestion) return
        const correctAns = question[currentQuestion].correct_answer
        if(que === correctAns) {
            this.props.updateScore()
            this.setState({correct:true,show:true,message:"Hurray! Let's try another one!!"})
        }
        else {
            this.setState({correct:false,show:true,message:"Ohh Crap! Let's try again!!"})
        }
    }
    handleClose = e => {
        try{
            e.preventDefault();
            let {currentQuestion} = this.state
            console.log(currentQuestion)
            currentQuestion = currentQuestion+1 
            if(currentQuestion>=this.props.copyState.data.length){
                this.setState({correct:true,show:true,message:"Done with the test"})
                setTimeout(()=>{
                    this.props.history.push('/')
                },2500)
                
                return 
            }
            if(this.state.correct===true){
                this.setState({currentQuestion:currentQuestion,show:false,correct:false})
            }
            else{
                this.setState({show:false,currentQuestion:currentQuestion})
            } 
            this.props.updateQuestionNumber(currentQuestion+1)
        }
        catch(e){
            console.log(e)
        }
       
    }
   
    render(){
        console.log('state in Questions-->',this.props.copyState)

        const question = [...this.props.copyState.data]
        console.log(question)
        const {currentQuestion} = this.state
        let options = []
        if(currentQuestion < this.props.copyState.numberOfQuestion)
        {
        var currentQuestionData = [...question[currentQuestion].incorrect_answers]
        currentQuestionData = [...currentQuestionData,question[currentQuestion].correct_answer]
        currentQuestionData.forEach((que,idx)=>{
            options.push(
            <div 
            key={idx} 
            className={idx<3?"wrong option":"right option"}
            onClick={e=>this.handleCheckAns(que)}>{que}</div>)
        })
        options.sort(function() {
            return .5 - Math.random();
          });
       }
        return(
            <div >
                <Header history={this.props.history}/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header >
                    <Modal.Title className={this.state.correct===true?"correct":"false"}>{this.state.correct===true?"Congratulations!!":"Bit harder to guess!!"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.state.message}</Modal.Body>
                <Modal.Body>{this.state.correct===true ? "Your Score :-":"Correct Answer :-"}</Modal.Body>
                <Modal.Body className="totalScore">{this.state.correct===true? this.props.copyState.score : question[currentQuestion].correct_answer}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary button" onClick={this.handleClose}>
                Try next!!
                </Button>
            </Modal.Footer>
                </Modal>
            <div className="questionWrapper">
                <div className="question">{`${question[currentQuestion].question}`}</div>
                <div className="answer">
                   {options}
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      copyState:state
    }
  }

export default connect(mapStateToProps,{updateScore,updateQuestionNumber})(Question)