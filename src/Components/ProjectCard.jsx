import React from 'react'

export default function Card({ image, name, description, index }) {
    return (
        <div className="card">
            {image && <img className="card-img" src={image} alt="Card image cap" />}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>

    );
}
