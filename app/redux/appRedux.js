const types = {
  ADD_ITEM: 'ADD_ITEM',
}

export const actionCreators = {
  addItem: (item) => {
    return { type: types.ADD_ITEM, payload: item }
  },

}

const initialState = {
  items: [{ label: 'List Item n°1', completed: false },
          { label: 'List Item n°2', completed: true },
          { label: 'List Item n°3', completed: true },
          { label: 'List Item n°4', completed: true },
          { label: 'List Item n°5', completed: true },
          { label: 'List Item n°6', completed: true },
          { label: 'List Item n°7', completed: true },
          { label: 'List Item n°8', completed: true },
          { label: 'List Item n°9', completed: true },
          { label: 'List Item n°10', completed: true },
          { label: 'List Item n°11', completed: true },
          { label: 'List Item n°12', completed: true },
          { label: 'List Item n°13', completed: true },
          { label: 'List Item n°14', completed: true },
          { label: 'List Item n°15', completed: true },
          { label: 'List Item n°16', completed: true },
          { label: 'List Item n°17', completed: true },
          { label: 'List Item n°18', completed: true },
          { label: 'List Item n°19', completed: true },
          { label: 'List Item n°20', completed: true },
          { label: 'List Item n°21', completed: true },
          { label: 'List Item n°22', completed: true },
          { label: 'List Item n°23', completed: true }],
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
