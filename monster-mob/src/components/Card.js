import React from 'react';

const Card = ({id, name, email,phone}) => {
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt = 'monsters' src={`https://robohash.org/set_set2/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
}

export default Card;
