const types = {
  ADD_ITEM: 'ADD_ITEM',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_ITEM_CLICKED: 'SET_ITEM_CLICKED',
}

export const actionCreators = {
  addItem: (item) => {
    return { type: types.ADD_ITEM, payload: item }
  },
  setCurrentPage: (index) => {
    return { type: types.SET_CURRENT_PAGE, payload: index }
  },
  setItemClicked: (index) => {
    return { type: types.SET_ITEM_CLICKED, payload: index }
  },

}

const initialState = {
  items: [{ label: 'List Item n°0' },
          { label: 'List Item n°1' },
          { label: 'List Item n°2' },
          { label: 'List Item n°3' },
          { label: 'List Item n°4' },
          { label: 'List Item n°5' },
          { label: 'List Item n°6' },
          { label: 'List Item n°7' },
          { label: 'List Item n°8' },
          { label: 'List Item n°9' },
          { label: 'List Item n°10'},
          { label: 'List Item n°11'},
          { label: 'List Item n°12'},
          { label: 'List Item n°13'},
          { label: 'List Item n°14'}],

  currentPageIndex: 0,
  itemClicked: 0
}

export const reducer = (state = initialState, action) => {
  const { items } = state
  const { type, payload } = action

  switch (type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [{ label: payload, completed: false }, ...items],
      }
    }
    case types.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPageIndex: payload,
      }
    }
    case types.SET_ITEM_CLICKED: {
      return {
        ...state,
        itemClicked: payload,
      }
    }
    default: {
      return state
    }
  }

}
