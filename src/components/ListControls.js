import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Paging from './Paging'
import styles from './ListControls.module.scss'

class ListControls extends React.Component {
  state = {
    search: '',
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value })
    clearTimeout(this.searchTimeout)
    const searchDelay = 500
    this.searchTimeout = setTimeout(() => {
      this.props.onSearchChange(this.state.search)
    }, searchDelay)
  }

  handleSelectChange = (event) => {
    this.props.onSortChange(event.value)
  }

  componentWillUnmount() {
    clearTimeout(this.searchTimeout)
  }

  render() {
    const {
      count,
      disabled,
      hasNext,
      hasPrev,
      onNextPage,
      onPrevPage,
      page,
      sort,
      totalCount,
    } = this.props
    const { search } = this.state
    const options = [
      { value: 'asc', label: 'A-Z' },
      { value: 'desc', label: 'Z-A' },
    ]
    const selectValue = options.find(x => x.value === sort)
    return (
      <div className={styles.root}>
        <div>
          <input
            type="text"
            value={search}
            placeholder="Search..."
            disabled={disabled}
            onChange={this.handleInputChange}
            className={styles.input}
          />
          <Select
            className={styles.select}
            isDisabled={disabled}
            isSearchable={false}
            placeholder="Sort results..."
            options={options}
            onChange={this.handleSelectChange}
            value={selectValue}
          />
        </div>
        <Paging
          count={count}
          total={totalCount}
          page={page}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      </div>
    )
  }
}

ListControls.propTypes = {
  count: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalCount: PropTypes.number,
  sort: PropTypes.string,
}

export default ListControls
