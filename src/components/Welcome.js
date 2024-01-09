import React from 'react'

export default function Welcome(props) {

  const styles = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    marginTop: '250px',
    marginLeft: '70px'
  }
  
  return (
    <div>

    <h1 style={styles}>Try TextWizard - one step solution for easy text modification. </h1>
    </div>
  )
}
