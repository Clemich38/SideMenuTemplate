const types = {
  ADD_ITEM: 'ADD_ITEM',
}

export const actionCreators = {
  addItem: (item) => {
    return { type: types.ADD_ITEM, payload: item }
  },

}

const initialState = {
  items: [{ label: 'List Item n°', completed: false },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true },
          { label: 'List Item n°', completed: true }],
}

export const reducer = (state = initialState, action) => {
  // const { items } = state
  // const { type, payload } = action

  // switch (type) {
  //   case types.ADD_ITEM: {
  //     return {
  //       ...state,
  //       items: [{ label: payload, completed: false }, ...items],
  //     }
  //   }
  //   case types.TOGGLE_ITEM_COMPLETED: {
  //     return {
  //       ...state,
  //       items: items.map((item, i) => {
  //         if (i === payload)
  //           return { label: item.label, completed: !item.completed };
  //         else
  //           return item;
  //       }),
  //     }
  //   }
  //   case types.REMOVE_ITEM: {
  //     return {
  //       ...state,
  //       items: items.filter((item, i) => i !== payload),
  //     }
  //   }
  //   default: {
  //     return state
  //   }
  // }

  return state;
}
