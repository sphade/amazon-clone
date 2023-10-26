<script>
	import { cartStore } from '../stores/cartStore';
	export let title;
	export let price;
	export let desc;
	export let id;
	export let image;
	const addToCart = () => {
		cartStore.update((c) => {
			return [...c, { title, price, desc, image,id }];
		});
	};
</script>


<div class="p-2 bg-white flex flex-col gap-2">
	<!-- <h1 class="text-lg font-semibold capitalize mb-2">Beautiful Pick</h1> -->
	<img src={image} class="h-[200px] object-contain w-full" alt="" />
	<p>{title}</p>
	<p class="text-red-600 text-lg">${price}</p>
	<button
		on:click={addToCart}
		class="rounded-md mt-auto bg-[#F7CA00] active:shadow capitalize text-sm shadow-md p-1 w-full"
	>
		add to cart
	</button>
</div>
