import React from 'react'
import {loadEvents, deleteEvent} from '../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'
import CreateEventFormContainer from './CreateEventFormContainer'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  deleteEventWithId = id => _event => {
    this.props.deleteEvent(id)
  }

  render() {
    if (!this.props.events) return null
    return (
      <React.Fragment>
        <EventsList
          events={this.props.events}
          onDelete={this.deleteEventWithId}
        />
        <CreateEventFormContainer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents, deleteEvent})(EventsListContainer)
