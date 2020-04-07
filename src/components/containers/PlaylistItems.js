import React from 'react'
import StylePlaylistItem from '../styles/StyledPlaylistItem'
import PlaylistItem from '../PlaylistItem'

const PlaylistItems = ({ videos , active }) => (
  <StylePlaylistItem>
    {videos.map(video => (
      <PlaylistItem
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
        />
    ))}
  </StylePlaylistItem>
)

export default PlaylistItems