import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListMessage.module.scss'

const ListMessage = (props) => {
  const {
    iconClassName,
    message,
    submessage,
  } = props
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <span className={iconClassName} />
      </div>
      <div className={styles.content}>
        <div className={styles.message}>{message}</div>
        { submessage &&
            <div className={styles.submessage}>
              {submessage}
            </div>
        }
      </div>
    </div>
  )
}

ListMessage.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  submessage: PropTypes.node,
}

export default ListMessage
