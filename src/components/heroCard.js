import React, { Component } from 'react';
import {Card} from "react-bootstrap"

import HeroTable from './heroTable';


class HeroCard extends Component {
    render() {
        return (
        <Card className="heroCard">
        <Card.Body className="heroCard">
          <Card.Title className="heroCard text-center">{this.props.hero.name}</Card.Title>
           <div className="container p-0">
            <div className="row">
            <img src={this.props.hero.image.url} alt={`${this.props.hero.name}`} className="col-6 img img-fluid heroCard"></img>
                <div className="col heroCard"> 
                <HeroTable hero={this.props.hero}/>
                </div>
            </div>
           </div>
        </Card.Body>
      </Card>)
    }
}
 
export default HeroCard;