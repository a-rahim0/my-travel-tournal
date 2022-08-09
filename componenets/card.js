import React from "react"

export default function Card(props){
    
    return (
        <div>
        <section className="card-container">
            <img className="card-image" src={props.imageUrl} alt={`Photo Of ${props.location}`} />
            <div className="card-info">
                <div>
                <i className="fa-solid fa-location-dot card-icon card-icon"></i>
                <span className="card-location">{props.location}</span>
                <a href={props.googleMapsUrl}><span className="card-map">View on Google Maps</span></a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </section>
        <hr />
        </div>
    )
}
