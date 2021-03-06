import { HIDE_MODAL, SHOW_MODAL, CHANGE_IMAGE, CHANGE_COLLECTION } from '../constants/ActionTypes'

const initialState = {
  show: false,
  collectionData: {},
  collections: [],
  colIdx: 0,
  aliases: [],
  imgIdx: 0
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true, collectionData: action.collectionData, collections: action.collections, colIdx: action.colIdx, aliases: action.aliases, imgIdx: action.imgIdx, direction: 'left' };
    case HIDE_MODAL:
      return { ...state, show: false };
    case CHANGE_IMAGE:
      return { ...state, imgIdx: action.imgIdx };
    case CHANGE_COLLECTION:
      return { ...state, colIdx: action.colIdx, aliases: action.aliases, imgIdx: 0, direction: action.direction };
    default:
      return state;
  }
}
