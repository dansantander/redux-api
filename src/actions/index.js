const CHANGE_FILTER  = 'CHANGE_FILTER '

const changeFilter = (category) => {
  return {
    type: CHANGE_FILTER,
    category,
  }
}

export { changeFilter, CHANGE_FILTER };