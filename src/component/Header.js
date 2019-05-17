import React from 'react'
import { connect } from 'react-redux';
import {Modal, Button} from 'react-bootstrap'
import '../header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
    }
    handleEndTest = e => {
        e.preventDefault()
        this.setState({show:true})
        setTimeout(()=>{
            this.props.history.push('/')
        },1500)
    }
    render(){
        const {score,currentQuestionNumber,data} = this.props.copyState
        return(
            <div className="headerWrapper">
             <Modal show={this.state.show} >
                <Modal.Header >
                    <Modal.Title>Test is Submitted</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thanks for Submitting the test</Modal.Body>
                <Modal.Body>Your Score :- </Modal.Body>
                <Modal.Body>{this.props.copyState.score}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary button" onClick={this.handleClose}>
                Try next!!
                </Button>
            </Modal.Footer>
                </Modal>
                <div>
                    <div>
                       <button className="button" onClick={this.handleEndTest}> End Test</button> 
                    </div>
                    <div className="score">
                    {`current Score :- ${score}`}
                    </div>
                    <div className="score">
                    {`current Question :- ${currentQuestionNumber}/${data.length}`}
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

export default connect(mapStateToProps,null)(Header)