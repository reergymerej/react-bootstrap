import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'
import ListMessage from './ListMessage'

const icon = {
  droid: 'fab fa-android',
  human: 'fas fa-user-circle',
}

const ListItem = (props) => {
  const {
    item: {
      name,
      height,
      mass,
      gender,
      species,
    },
  } = props

  const iconClassName = icon[species] || 'fas fa-question'

  return (
    <ListMessage
      iconClassName={iconClassName}
      message={name}
      submessage={
        <div className={styles.stats}>
          <span>
            height: { height }
          </span>
          <span>
            mass: { mass }
          </span>
          <span>
            gender: { gender }
          </span>
        </div>
      }
    />
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.oneOf([
      'droid',
      'human',
    ]),
  }).isRequired,
}

export default ListItem
