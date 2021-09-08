import React, { Component } from 'react';
import {Table} from "react-bootstrap"


class HeroTable extends Component
{
    render()
    {
        console.log(this.props.hero)
        return(
        <Table striped bordered hover className="text-center" id="heroic-table" responsive>
                        <tbody className ="hero-table">
                            <tr>
                            <td colSpan="2" className="hero-table">Appearance</td>
                            </tr>
                            <tr>
                            <td className="hero-table">Eye Color</td>
                            <td>{this.props.hero.appearance["eye-color"]}</td>
                            </tr>
                            <tr>
                            <td>Gender</td>
                            <td>{this.props.hero.appearance.gender}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Thornton</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
        </Table>)
    }
}

export default HeroTable