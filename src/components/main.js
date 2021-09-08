import React, {Component} from "react"
import axios from "axios"
import {Spinner, Button} from "react-bootstrap"

import HeroCard from "./heroCard"

const apiKey=process.env.REACT_APP_API_KEY
const baseUrl=`https://superheroapi.com/api/${apiKey}`


class Main extends Component
{
    constructor(props)
    {
        super(props)
        {
            this.state={
                hero: "",
                isLoading: false
            }

            this.getRandomHero= this.getRandomHero.bind(this)
        }
    }

    async getRandomHero(){
        this.setState({isLoading: true, hero:""})
        try{
            const hero = await axios.get(`${baseUrl}/${Math.floor(Math.random() * 731)+1}`)
            this.setState({isLoading: false, hero: hero})
        }
        catch(err)
        {
            this.setState({isLoading: false, hero: ""})
            console.log(err)
        } 
    }

    render()
    {
        if (this.state.isLoading)
        {
          return(
              <>
              <div className="container">
                <div className="row text-center align-items-center">
                    <div className="col-12">
                        <Spinner animation="border" variant="warning"/>
                        <h1>Loading...</h1>
                    </div>
                </div>
              </div>
              </>
          )
        }

        else if(!this.state.hero)
        {
            return(<>
                <div className="container">
                    <div className="row">
                    <div className="col-6 text-center"><Button variant="warning" onClick={this.getRandomHero}>Get hero information</Button></div>
                    </div>
                </div>
            </>)
        }
        else
        {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-6"><Button variant="warning" onClick={this.getRandomHero}>Get hero information</Button></div>
                    </div>
                    <HeroCard hero={this.state.hero.data}/>
                </div>
                )
        }
        
    }
}


export default Main
