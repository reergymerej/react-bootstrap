import React from 'react'
import PropTypes from 'prop-types'
import SearchableList from '../components/SearchableList'
import { connect } from 'react-redux'
import { actions, thunks } from '../redux'

class App extends React.Component {
  componentDidMount() {
    this.props.load()
  }

  handleSearchChange = (search) => {
    this.props.load(search)
  }

  handleSortChange = (sort) => {
    this.props.setSort(sort)
  }

  handleNextPage = () => {
    this.props.load(this.props.search, this.props.page + 1)
  }

  handlePrevPage = () => {
    this.props.load(this.props.search, this.props.page - 1)
  }

  render() {
    const {
      count,
      hasNext,
      hasPrev,
      loaded,
      people,
      sort,
      page,
    } = this.props

    return (
      <SearchableList
        count={count}
        items={people}
        loaded={loaded}
        onNextPage={this.handleNextPage}
        onPrevPage={this.handlePrevPage}
        onSearchChange={this.handleSearchChange}
        onSortChange={this.handleSortChange}
        hasPrev={hasPrev}
        hasNext={hasNext}
        sort={sort}
        page={page}
      />
    )
  }
}

App.propTypes = {
  count: PropTypes.number,
  hasNext: PropTypes.bool,
  hasPrev: PropTypes.bool,
  load: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  page: PropTypes.number,
  people: PropTypes.array.isRequired,
  search: PropTypes.string,
  setSort: PropTypes.func.isRequired,
  sort: PropTypes.string,
}

const mapStateToProps = state => ({
  count: state.count,
  hasNext: state.hasNext,
  hasPrev: state.hasPrev,
  loaded: state.loaded,
  page: state.page,
  people: state.people,
  search: state.search,
  sort: state.sort,
})

const mapDispatchToProps = {
  load: thunks.load,
  setSort: actions.setSort,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
