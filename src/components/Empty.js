import React from 'react'
import ListMessage from './ListMessage'

const Empty = () => (
  <ListMessage
    iconClassName="fas fa-exclamation-triangle"
    message="We couldn&#39;t find the droids you were looking for."
    submessage="Please try a different search query."
  />
)

export default Empty
