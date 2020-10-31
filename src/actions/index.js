const CHANGE_FILTER  = 'CHANGE_FILTER'
const QUERY_FILTER  = 'QUERY_FILTER'

const changeFilter = (category) => {
  return {
    type: CHANGE_FILTER,
    category,
  }
}

const queryFilter = (query) => {
  return {
    type: QUERY_FILTER,
    query,
  }
}

export { changeFilter, queryFilter, CHANGE_FILTER, QUERY_FILTER };