import React from 'react'

export default (props) => (
  <form onSubmit={props.onSubmit}>
    {['name', 'date', 'description'].map(fieldName => (
      <React.Fragment key={fieldName}>
        <label htmlFor={fieldName}>{fieldName}</label>
        <input
          id={fieldName}
          type="text"
          name={fieldName}
          value={props.values[fieldName]}
          onChange={props.onChange}
        />
      </React.Fragment>
    ))}
    <input type="submit" value="Save" />
  </form>
)
