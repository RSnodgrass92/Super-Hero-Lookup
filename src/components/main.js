import React, {Component} from "react"
import axios from "axios"
import {Spinner} from "react-bootstrap"
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
        console.log(this.state)
        if (this.state.isLoading)
        {
          return(
              <>
              <Spinner animation="border" variant="warning"/>
              <h1>Loading...</h1>
              </>
          )
        }
        else
        {
            return(
                <div className="container">
                    <div className="row">
                        {(this.state.hero)? <img src={this.state.hero.data.image.url} className="col-6 img img-fluid"></img>: <></>}
                        <div className="col-6"><button onClick={this.getRandomHero}>Get hero information</button>test2</div>
                    </div>
                </div>
                )
        }
        
    }
}


export default Main
