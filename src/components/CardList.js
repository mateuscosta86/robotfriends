import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const robotsList = robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/> 
    });
    return (
        <div>
            {robotsList}
        </div>        
    );
}

export default CardList;