import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
        }

    renderComments(comments){
        if(comments!=null){
            return (
           
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardBody>
                            {comments}                         
                            
                    </CardBody>
                    </CardBody>
                </Card>
            
        );
        }
        else 
        return (<div></div>)
       
    }
    render(){
        let comments=null;
        if(this.props.dish!=null){
        comments = this.props.dish.comments.map((comment)=>{
                return (<div>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}</p>
                </div>
                    
                )
            })
        }
       
        
        return (<div className='row'>
            <div className='col-12 col-md-5 m-1'>
          {this.renderDish(this.props.dish)}
        </div>
         <div className='col-12 col-md-5 m-1'>
          {this.renderComments(comments)}
        </div>
        
        </div>
            
            )
        
    }
}
export default DishDetail;