import React from 'react'
import PropTypes from 'prop-types'
import styles from './Paging.module.scss'

const getFriendlyNumber = (x) => isNaN(x) ? '?' : x

const Paging = (props) => {
  const {
    count,
    total,
    page,
    onNextPage,
    onPrevPage,
    hasNext,
    hasPrev,
  } = props
  const itemTotal = getFriendlyNumber(total)
  const pageTotal = getFriendlyNumber(Math.ceil(total / 10))
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        {count} of {itemTotal} items
      </div>
      <div>
        page {page} of {pageTotal}
        <div className={styles.buttons}>
          <button disabled={!hasPrev} onClick={onPrevPage}>
            <span className="fas fa-chevron-left" />
          </button>
          <button disabled={!hasNext} onClick={onNextPage}>
            <span className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  )
}

Paging.propTypes = {
  count: PropTypes.number.isRequired,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  page: PropTypes.number,
  total: PropTypes.number,
}

export default Paging
