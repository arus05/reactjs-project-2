import React from "react"
import Card from "./components/Card"
import Data from "./data.js"
import Nav from "./components/Nav"

const cardData = Data.map(card=>{
    return(
        <Card
            key = {card.title}
            item = {card}
        />
    )
})

export default function App(){
    return(
        <div>
            <Nav/>
            <section className="app--cards">
                {cardData}
            </section>
        </div>
    )
}