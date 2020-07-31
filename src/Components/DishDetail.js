import React,{Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Label
    , Button, Row, Col, Modal, ModalHeader, ModalBody} from 'reactstrap'
    import { Loading } from './Loading';
import { Link } from 'react-router-dom';
import { Control, Form,LocalForm, Errors, actions } from 'react-redux-form';

const required = (val) => val && val.length
const maxlength = (len) => (val) => !(val) || (val.length <= len)
const minlength = (len) => (val) => !(val) || (val.length >= len)


function RenderDish({dish,isLoading,errMess}) {
    
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
        
    
    }

function RenderComments({comments}){
   
    const cmmnts = comments.map((comment)=>{
        return (<p>{comment.comment}</p>)
    })
        return (
       
            <Card>
                <CardBody>
                    <CardTitle>Comments</CardTitle>
                    <CardBody>
                        {cmmnts}                         
                        
                </CardBody>
                </CardBody>
            </Card>
        
    );
    
   
}
class SubmitComment extends Component {
    
    constructor(props){
        super(props)

        this.state ={
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dish.id,values.rating, values.author, values.message)
            }
    render(){
        return (<div>
            <Button outline onClick={this.toggleModal}>
                <span className='fa fa-pencil fa-md'><strong> Submit Comment</strong></span>
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader>Add A Comment</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)} className='p-3'>
                <Row>
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select model='.rating' name='rating'
                    className='form-control'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Control.select>
                </Row>
                <Row>
                    <Label htmlFor="author">Your Name</Label>
                    <Control.text model='.author' id='author' name='author'
                    placeholder='Your Name' className='form-control'
                    validators={{
                        required, maxlength: maxlength(15), minlength: minlength(3)
                    }}
                     />
                    <Errors 
                    className='text-danger'
                    model='.author'
                    show='touched'
                    messages={{
                        required: 'Required!!',
                        minlength: 'Must be greater than 2 characters!!',
                        maxlength: 'Must be 15 characters or less!!'
                    }}
                    />
                </Row>
                <Row>
                <Col md={12} className='p-0'>
                    <Label htmlFor="message">Comment</Label><br />
                    <Control.textarea model='.message' id='message' name='message'
                    className='form-control' />
                    </Col>
                </Row>
                <Row className='mt-1'>
                    <Col md={{size:4}}  className='p-0 mt-1'>
                        <Button type="submit" color="primary" className='form-control'><strong>Comment</strong></Button>
                    </Col>
                </Row>
            </LocalForm>
        </ModalBody>
        </Modal>
        </div>
        )
    }
}

class DishDetail extends Component{

   
    render(){
               
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.dish} isLoading={this.props.isLoading} errMess={this.props.errMess}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={this.props.comments} />
                </div>
            </div>
            <SubmitComment addComment={this.props.addComment} dish={this.props.dish}/>
            </div>
        );
            
            
        
    }
}
export default DishDetail;