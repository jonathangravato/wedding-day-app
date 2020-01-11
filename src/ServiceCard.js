import React from 'react';

function ServiceCard (props) {

    console.log(props.service)

    return (
        <div className="uk-card uk-card-default uk-animation-fade uk-margin-bottom">
            <img src={props.service.img} alt={props.service.title} />
            <h3 className="uk-card-title">{props.service.title}</h3>
            <p>{props.service.date.toDateString()}</p>
        </div>
    )
}

export default ServiceCard

