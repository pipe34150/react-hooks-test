import React from 'react'
import StyledNightmode from './styles/StyledNightmode'

const NightMode = ({ nightModeCallback , nightMode }) => (
  <StyledNightmode>
    <span>NightMode</span>
    <lable className="switch">
      <input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
      <span className="slider round" />
    </lable>
  </StyledNightmode>
)

export default NightMode