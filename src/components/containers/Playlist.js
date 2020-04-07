import React from 'react'
import PlayListHeader from '../PlaylistHeader'
import PlaylistItem from '../PlaylistItem'
import NightMode from '../Nightmode'

const Playlist = props => {
  return (
    <>
      <NightMode />
      <PlayListHeader />
      <PlaylistItem />
    </>
  )
}

export default Playlist