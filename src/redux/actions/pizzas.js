import * as axios from "axios";

export const setLoaded = payload => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false));
	axios
		.get(
			`/pizzas?${category > 0 && `category=${category - 1}`}&_sort=${sortBy.type
			}&_order=${sortBy.order}`,
		).then(({ data }) => {
			dispatch(setPizzas(data));
		});
};

export const setPizzas = (items) => ({
	type: 'SET_PIZZAS',
	payload: items
});

