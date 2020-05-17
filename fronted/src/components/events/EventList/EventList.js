import React from 'react';

import  EventItem from "./EventItem"
import "./EventList.css"

const eventList = props => {
    const events = props.events.map(event => {
       return <EventItem key={event._id}
           eventId={event._id}
           price={event.price}
           title ={event.title}
           date={event.date}
           onDetail={props.onViewDetail}
           />;
    });
    return (<ul className="events_list">{events}</ul>)
};

export default eventList;
