import {IBookstateContext} from './context';
import {createAction} from 'redux-actions';
// import {IBook} from './context';

export const actionType = {
    GET_BOOKS: "GET_BOOKS",
    GET_BOOK_BY_GENRE: "GET_BOOK_BY_GENRE",
    RENT_BOOK: "RENT_BOOK",
    GET_RECOMMENDED_BOOKS: "GET_RECOMMENDED_BOOKS",
    GET_MOST_BORROWED_BOOKS: "GET_MOST_BORROWED_BOOKS"
}

export const getBooksAction = createAction<IBookstateContext>(actionType.GET_BOOK_BY_GENRE, ()=>({}));