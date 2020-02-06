import service from './service'

const LOAD = 'people/LOAD'
const LOAD_SUCCESS = 'people/LOAD_SUCCESS'
const SET_SORT = 'people/SET_SORT'

// micro factories to create actions
export const actions = {
  load: (search, page) => ({
    type: LOAD,
    search,
    page,
  }),
  loadSuccess: (people, count, next, previous) => ({
    type: LOAD_SUCCESS,
    people,
    count,
    next,
    previous,
  }),
  setSort: (sort) => ({
    type: SET_SORT,
    sort,
  }),
}

const initialState = {
  loaded: false,
  people: [],
}

// reusable curried sorter
const getSorterByField = (field, asc) => {
  const direction = asc ? 1 : -1
  return (a, b) => {
    if (a[field] < b[field]) {
      return -direction
    } else if (a[field] > b[field]) {
      return direction
    }
    return 0
  }
}

const asc = getSorterByField('name', true)
const desc = getSorterByField('name', false)

const sortPeople = (people, direction) => {
  switch (direction) {
  case 'asc':
    return people.sort(asc)
  case 'desc':
    return people.sort(desc)
  default:
    return people
  }
}

// reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD:
    return {
      ...state,
      search: action.search,
      loaded: false,
      page: action.page,
      count: state.search !== action.search ? undefined : state.count,
      people: state.search !== action.search ? [] : state.people,
    }

  case LOAD_SUCCESS:
    return {
      ...state,
      loaded: true,
      people: sortPeople(action.people, state.sort),
      count: action.count,
      hasPrev: !!action.previous,
      hasNext: !!action.next,
    }

  case SET_SORT:
    return {
      ...state,
      sort: action.sort,
      people: sortPeople(state.people, action.sort),
    }

  default:
    return state
  }
}

// thunks
const load = (search = '', page = 1) => {
  return (dispatch) => {
    dispatch(actions.load(search, page))
    return service.loadPeople(search, page)
      .then(response => {
        const { count, people, next, previous } = response
        dispatch(actions.loadSuccess(people, count, next, previous))
      })
  }
}

export const thunks = {
  load,
}
