import { error } from '@sveltejs/kit';

export const load = ({ fetch }) => {
	const getProducts = async () => {
		try {
			const res = await fetch('https://fakestoreapi.com/products');
			return res.json();
		} catch (e) {
			throw error(400, 'love in all');
		}
	};
	return {
		products: getProducts()
	};
};
