const INITIAL_STATE = {
  cat: '',
  loading: false,
  err: null,
}

const ACTION_HANDLERS = {
  FETCH_CAT_LOADING: (state, action) => {
    return { ...state, loading: true }
  },
  FETCH_CAT_SUCCESS: (state, action) => {
    return { ...state, cat: [...state.cat, action.payload], loading: false }
  },
  FETCH_CAT_FAIL: (state, action) => {
    return { ...state, err: action.payload }
  },
}

export default function homePageReducer(state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
