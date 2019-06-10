import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';
import data from './../data.json';

class ContentComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        };
    }

    componentDidMount(){
        this.setState({
            data: data.hits
        })
    }

listIngredients = () =>{
    const {data} = this.state;
    return(
        <ul>
        {data.map(item =>(
            <li key={item.recipe.ingredientLines}>{item.recipe.ingredientLines[0]}</li>
        ))}
        </ul>
    )
}

imgRecipe = () => {
    const {data} =this.state;
    return(
        <div>
        {data.map(item=>(
            console.log(item.recipe.image)
            ))}
        </div>
        
    )
}
render() {
console.log(this.state.data)
  return(
   <div>
   <Container>
    <Row className="justify-content-center">
    <Col md="8">
   <Card className="p-4">
    <CardBody>
        <CardTitle>Pollo frito</CardTitle>
        <CardSubtitle>Ingredientes</CardSubtitle>
        <CardBody>
        {this.imgRecipe()}
        <CardText>
        {this.listIngredients()}
        </CardText>
        </CardBody>
    </CardBody>
   </Card>
   </Col>
   </Row>
   </Container> 
   </div>
    )
   }
 }

export default ContentComponent;