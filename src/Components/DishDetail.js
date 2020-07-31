import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({dish}) {
    
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
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={this.props.comments} />
                </div>
            </div>
            </div>
        );
            
            
        
    }
}
export default DishDetail;