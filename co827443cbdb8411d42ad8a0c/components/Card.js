import React from "react"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl} className="card--image" />
            <div className="card--content">
                <div className="card--country">
                    <span className="material-symbols-outlined">location_on</span>
                    <div className="card--country-name">{props.item.location.toUpperCase()}</div>
                    <a href={props.item.googleMapsUrl} className="card--url">View on Google Maps</a>
                </div>
                <h2 className="card--location">{props.item.title}</h2>
                <div className="card--duration">
                    {`${props.item.startDate}-${props.item.endDate}`}
                </div>
                <p className="card--description">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}