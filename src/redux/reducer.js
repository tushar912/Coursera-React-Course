import { DISHES } from '../Components/shared/dishes';
import { COMMENTS } from '../Components/shared/comments';
import { PROMOTIONS } from '../Components/shared/promotions';
import { LEADERS } from '../Components/shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};