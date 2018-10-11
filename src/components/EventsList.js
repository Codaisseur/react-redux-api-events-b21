import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <ul>
    {props.events.map(event => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
        <button onClick={props.onDelete(event.id)}>x</button>
      </li>
    ))}
  </ul>
)
