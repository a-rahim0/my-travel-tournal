import React from "react"
import Card from "./componenets/card"
import Nav from "./componenets/nav"
import Data from "./data"

export default function App() {
    
    const card = Data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <div>
            <Nav />
            {card}
        </div>
    )
}