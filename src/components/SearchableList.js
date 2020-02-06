import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import ListControls from './ListControls'
import styles from './SearchableList.module.scss'

const SearchableList = (props) => (
  <div className={styles.root}>
    <ListControls
      count={props.items.length}
      disabled={!props.loaded}
      hasNext={props.hasNext}
      hasPrev={props.hasPrev}
      onNextPage={props.onNextPage}
      onPrevPage={props.onPrevPage}
      onSearchChange={props.onSearchChange}
      onSortChange={props.onSortChange}
      page={props.page}
      sort={props.sort}
      totalCount={props.count}
    />
    <List
      items={props.items}
      loading={!props.loaded}
    />
  </div>
)

SearchableList.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  items: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  sort: PropTypes.string,
}

export default SearchableList
