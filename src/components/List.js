import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import Loading from './Loading'
import Empty from './Empty'

const List = (props) => (
  <div>
    {
      props.loading
        ? <Loading />
        : (
          props.items.length
            ? props.items.map(item => (
              <ListItem
                key={item.name}
                item={item}
              />
            ))
            : <Empty />
        )
    }

  </div>
)

List.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default List
